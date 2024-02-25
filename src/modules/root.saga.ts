import { all } from "redux-saga/effects";

import { watchGetCities as watchGetCitiesSaga } from "./cities/sagas";
// import { watchGetWeather as watchGetWeatherSaga } from "./weather/sagas";

export function* rootSaga() {
  yield all([watchGetCitiesSaga()]);
}
