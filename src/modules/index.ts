import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch } from "react-redux";
import { citiesSlice, SLICE_NAME as CITIES } from "./cities/slice";
import { weatherSlice, SLICE_NAME as WEATHER } from "./weather/slice";

export const rootReducer = combineReducers({
  [CITIES]: citiesSlice,
  [WEATHER]: weatherSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useReduxDispatch;

export type RootState = ReturnType<typeof store.getState>;
