import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const SLICE_NAME = "weather";

export const weatherSlice = createSlice({
  name: SLICE_NAME,
  initialState: "beeba",
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
});
