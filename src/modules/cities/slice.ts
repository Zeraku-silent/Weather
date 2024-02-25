import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const SLICE_NAME = "cities";

const initialState ={
  cities:[],
  isLoading: false,
}

export const citiesSlice = createSlice({
  name: SLICE_NAME,
  initialState: "aboba",
  reducers: {
    setText: (state, action: PayloadAction<string>) =>
      `${state} ${action.payload}`,
      setCities:()=>,
      requestCities:()=>
  },
});

export const citiesActions = citiesSlice.actions;
