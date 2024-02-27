import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "../../core/api/types";

import { CitiesState, City } from "./types";

export const SLICE_NAME = "cities";

const initialState: CitiesState = {
  items: [],
  status: REQUEST_STATUS.INITIAL,
};

export const citiesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    requestCities: ({ status }, action: PayloadAction<string>) => {
      status = REQUEST_STATUS.LOADING;
    },
    setCities: ({ status, items }, action: PayloadAction<City[]>) => {
      status = REQUEST_STATUS.SUCCESS;
      items = action.payload;
    },
  },
});

export const citiesActions = citiesSlice.actions;
