import { CITIES_API } from './../../core/api';
import { call, put, takeLatest } from "redux-saga/effects";

import { CITIES_API } from "../../core/api";

import {
  GET_CITIES_REQUEST,
  getCitiesSuccess,
  getCitiesError,
} from "./cities.actions";


function* getCities({cityName}) {
    try {
        const response = yield call(CITIES_API.post, './places')
    }
}