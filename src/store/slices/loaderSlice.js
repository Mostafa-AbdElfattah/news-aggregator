"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showHideLoader: (state , action) => (state = action.payload),
  },
});

export const { showHideLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
