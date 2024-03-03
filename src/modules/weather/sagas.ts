import { call, put, takeLatest } from "redux-saga/effects";

// import { weather_API } from "../../core/api/api";

import { weatherActions } from "./slice";
import { WEATHER_API } from "../../core";

//@ts-ignore
function* getWeather({ payload: { name, lat, lon, navigate } }) {
  try {
    //@ts-ignore
    const response = yield call(
      WEATHER_API.get,
      `/weather?lat=${lat}&lon=${lon}&units=metric&appid=e0272992c9e156a1a2e599e35c2d335e`
    );

    const updatedWeather = { ...response.data, id: name, name };

    yield put(weatherActions.setWeather(updatedWeather));

    if (navigate) {
      navigate(`/weather/${updatedWeather.id}?lat=${lat}&lon=${lon}`);
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetweather() {
  //@ts-ignore
  yield takeLatest(weatherActions.requestWeather.type, getWeather);
}
