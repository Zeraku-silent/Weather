import { call, put, takeLatest } from "redux-saga/effects";

// import { CITIES_API } from "../../core/api/api";

import { citiesActions } from "./slice";
import { CITIES_API } from "../../core";

//@ts-ignore
function* getCities({ payload }) {
  try {
    //@ts-ignore
    const response = yield call(
      CITIES_API.get,
      `/direct?q=${payload}&limit=10&appid=e0272992c9e156a1a2e599e35c2d335e`
    );

    console.log(response);

    yield put(citiesActions.setCities(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetCities() {
  //@ts-ignore
  yield takeLatest(citiesActions.requestCities.type, getCities);
}
