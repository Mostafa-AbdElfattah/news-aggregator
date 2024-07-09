"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSnackbar: false,
    message: "",
    type: "success",
  };

export const snackBarSlice = createSlice({
  name: "snakbar",
  initialState,
  reducers: {
    showHideSnackbar: (state , action) => {
        state.showSnackbar = action.payload.isOpen;
        state.message = action.payload.message;
        state.type = action.payload.type;
    }
  },
});

export const { showHideSnackbar } = snackBarSlice.actions;

export default snackBarSlice.reducer;
