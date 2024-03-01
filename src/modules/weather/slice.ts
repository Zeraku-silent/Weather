import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "../../core/api/types";

import { weatherState, Weather } from "./types";

export const SLICE_NAME = "weather";

const initialState: WeatherState = {
  items: [],
  status: REQUEST_STATUS.INITIAL,
};

export const weatherSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    requestWeather: (state, action: PayloadAction<string>) => {
      state.status = REQUEST_STATUS.LOADING;
    },
    setWeather: (state, action: PayloadAction<City[]>) => {
      state.status = REQUEST_STATUS.SUCCESS;
      state.items = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;
