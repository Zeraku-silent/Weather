import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch } from "react-redux";
const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useReduxDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
