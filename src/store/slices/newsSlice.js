"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstSourceList: [],
  secondSourceList: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNewsfirstSourceRequest: (action) => action.payload,
    getNewsfirstSourceResponse: (state, action) => {
      state.firstSourceList = action.payload.list;
    },
    getNewsSecondSourceRequest: (action) => action.payload,
    getNewsSecondSourceResponse: (state, action) => {
      state.secondSourceList = action.payload.list;
    },
  },
});

export const {
  getNewsfirstSourceRequest,
  getNewsfirstSourceResponse,
  getNewsSecondSourceRequest,
  getNewsSecondSourceResponse

} = newsSlice.actions;

export default newsSlice.reducer;
