import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const SLICE_NAME = "cities";

export const citiesSlice = createSlice({
  name: SLICE_NAME,
  initialState: "aboba",
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
});
