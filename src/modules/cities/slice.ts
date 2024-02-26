import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "../../core/api/types";

import { CitiesState, City } from "./types";

export const SLICE_NAME = "cities";

const initialState: CitiesState = {
  cities: [],
  status: REQUEST_STATUS.INITIAL,
};

export const citiesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    requestCities: ({ status }) => {
      status = REQUEST_STATUS.LOADING;
    },
    setCities: ({ status, cities }, action: PayloadAction<City[]>) => {
      status = REQUEST_STATUS.SUCCESS;
      cities = action.payload;
    },
  },
});

export const citiesActions = citiesSlice.actions;
