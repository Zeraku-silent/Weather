import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";

import { citiesSlice, SLICE_NAME as CITIES } from "./cities/slice";
import { weatherSlice, SLICE_NAME as WEATHER } from "./weather/slice";

export const rootReducer = combineReducers({
  [CITIES]: citiesSlice.reducer,
  [WEATHER]: weatherSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useReduxDispatch;

export type RootState = ReturnType<typeof store.getState>;
