import { put, takeLatest } from "redux-saga/effects";

// import { CITIES_API } from "../../core/api/api";

import { citiesActions } from "./slice";
import { CITIES_API } from "../../core";

//@ts-ignore
function* getCities({ payload }) {
  try {
    //@ts-ignore
    const response = yield (CITIES_API.get,
    `?q=${payload}&appid=884360aca03bb2188beeab6cdb2bc93a`,
    {
      type: "city",
      query: `${payload}`,
    });

    console.log(response);
    //@ts-ignore
    yield put(citiesActions.setCities(response.data.hits));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetCities() {
  //@ts-ignore
  yield takeLatest(citiesActions.requestCities.type, getCities);
}
