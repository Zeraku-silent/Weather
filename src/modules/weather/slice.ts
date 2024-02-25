import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const SLICE_NAME = "weather";

export const weatherSlice = createSlice({
  name: SLICE_NAME,
  initialState: "beeba",
  reducers: {
    setText: (state, action: PayloadAction<string>) =>
      `${state} ${action.payload}`,
  },
});
