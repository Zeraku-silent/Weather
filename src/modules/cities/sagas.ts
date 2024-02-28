import { put, takeLatest } from "redux-saga/effects";

// import { CITIES_API } from "../../core/api/api";

import { citiesActions } from "./slice";

//@ts-ignore
function* getCities({ payload }) {
  try {
    //@ts-ignore
    const response = [
      {
        id: 50388,
        countryCode: "GB",
        countryName: "United Kingdom",
        latitude: 51.50853,
        longitude: -0.12574,
        name: "London",
        stateCode: "ENG",
        stateName: "England",
      },
      {
        id: 99972,
        countryCode: "RU",
        countryName: "Russia",
        latitude: 55.75222,
        longitude: 37.61556,
        name: "Moscow",
        stateCode: "MOW",
        stateName: "Moscow",
      },
      {
        id: 101074,
        countryCode: "RU",
        countryName: "Russia",
        latitude: 59.93863,
        longitude: 30.31413,
        name: "Saint Petersburg",
        stateCode: "SPE",
        stateName: "Saint Petersburg",
      },
    ];

    console.log(response);
    //@ts-ignore
    yield put(citiesActions.setCities(response));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetCities() {
  //@ts-ignore
  yield takeLatest(citiesActions.requestCities.type, getCities);
}
