import store from "../../store/store";
import { showHideLoader } from "@/store/slices/loaderSlice";
import { showHideSnackbar } from "@/store/slices/snackBarSlice";

export const isHandlerEnabled = (config = {}) => {
  return Object.prototype.hasOwnProperty.call(config, "handlerEnabled") &&
    !config.handlerEnabled
    ? false
    : true;
};

// This is used to handle remove loader only if all pending requests are resolved
let numberOfAjaxCAllPending = 0;

export const requestHandlerFirstSource = (request) => {
  numberOfAjaxCAllPending++;
  if (isHandlerEnabled(request)) {
    store.dispatch(showHideLoader(true));
  }

  const apiKey = process.env.NEWS_ORG_API_KEY;

  const requestParams = { ...request.params };

  if (requestParams) {
    request.params = {
       apiKey,
      ...requestParams,
    };
  } else {
    request.params = { apiKey };
  }

  return request;
};

export const requestHandlerSecondSource = (request) => {
  numberOfAjaxCAllPending++;
  if (isHandlerEnabled(request)) {
    store.dispatch(showHideLoader(true));
  }

  const apiKey = process.env.NY_TIMES_API_KEY;

  const requestParams = { ...request.params };

  if (requestParams) {
    request.params = {
      'api-key' : apiKey,
      ...requestParams,
    };
  } else {
    request.params = { 'api-key' : apiKey };
  }

  return request;
};

export const successHandler = (response) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(response)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
    }
  }
  return response;
};

export const errorHandler = (error) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(error.config)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
    }
  }

  if (error?.message === "Network Error") {
    store.dispatch(
      showHideSnackbar({
        isOpen: true,
        type: "error",
        message: "No Internet Connection",
      })
    );
  } else {
    store.dispatch(
      showHideSnackbar({
        isOpen: true,
        type: "error",
        message: "Sorry, something went wrong!",
      })
    );
  }
  return Promise.reject({ ...error });
};
