import { call, put, takeLatest } from "redux-saga/effects";

import { CITIES_API } from "../../core/api/api";

import { citiesActions } from "./slice";

//@ts-ignore
function* getCities({ payload }) {
  try {
    //@ts-ignore
    const response = yield call(CITIES_API.post, "/places/query", {
      type: "city",
      query: `${payload}`,
    });

    console.log(response);

    yield put(citiesActions.setCities(response.data.hits));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetCities() {
  //@ts-ignore
  yield takeLatest(citiesActions.requestCities.type, getCities);
}
