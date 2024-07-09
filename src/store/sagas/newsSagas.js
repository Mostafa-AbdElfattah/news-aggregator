import { put, call, takeEvery } from "redux-saga/effects";
import * as apis from "../../network/apis/news";
import { showHideSnackbar } from "../slices/snackBarSlice";
import {
  getNewsfirstSourceResponse,
  getNewsSecondSourceResponse
} from "../slices/newsSlice";

function* getNewsFirstSourceSaga({ payload }) {
  try {
    const response = yield call(apis.getNewsFirstSource, payload);
    yield put(
      getNewsfirstSourceResponse({
          list: response.data.articles,
      })
    );
  } catch (error) {
    yield put(
      showHideSnackbar({
        isOpen: true,
        type: "error",
        message: error.response?.data,
      })
    );
  }
}

function* getNewsSecondSourceSaga({ payload }) {
  try {
    const response = yield call(apis.getNewsSecondSource, payload);
    yield put(
      getNewsSecondSourceResponse({
          list: response.data.results,
      })
    );
  } catch (error) {
    yield put(
      showHideSnackbar({
        isOpen: true,
        type: "error",
        message: error.response?.data,
      })
    );
  }
}


export default function* NewsSagas() {
  yield takeEvery("news/getNewsfirstSourceRequest", getNewsFirstSourceSaga);
  yield takeEvery("news/getNewsSecondSourceRequest", getNewsSecondSourceSaga);
}
