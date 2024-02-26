import { call, put, takeLatest } from "redux-saga/effects";

import { CITIES_API } from "../../core/api/api";

import { citiesActions } from "./slice";

function* getCities({ cityName }) {
  try {
    const response = yield call(CITIES_API.post, "./places/query", {
      type: "city",
      query: "${cityName",
    });

    console.log(response);

    yield put(citiesActions.setCities(response.data.hits));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetCities() {
  yield takeLatest(citiesActions.requestCities.type, getCities);
}
