"use client";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import loaderReducer from "./slices/loaderSlice";
import snackBarSlice from "./slices/snackBarSlice";
import newsReducer from "./slices/newsSlice";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    snackbar: snackBarSlice,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
  devTools: true,
});

saga.run(rootSaga);

export default store;
