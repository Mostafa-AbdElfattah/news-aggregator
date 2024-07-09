import axios from "axios";

import {
  requestHandlerFirstSource,
  requestHandlerSecondSource,
  successHandler,
  errorHandler,
} from "../interceptors";

export const axiosInstanceFirstSource = axios.create({
  baseURL: process.env.NEWS_ORG_API,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const axiosInstanceSecondSource = axios.create({
  baseURL: process.env.NY_TIMES_API,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Handle request First process
axiosInstanceFirstSource.interceptors.request.use((request) => requestHandlerFirstSource(request));

// Handle response First process
axiosInstanceFirstSource.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

// Handle request Second process
axiosInstanceSecondSource.interceptors.request.use((request) => requestHandlerSecondSource(request));

// Handle response Second process
axiosInstanceSecondSource.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
