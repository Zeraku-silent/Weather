import { createSelector } from "@reduxjs/toolkit";

const getId = (_: unknown, id: string) => id;

const getWeather = (state) => state.weather.items;

export const getWeatherById = createSelector(
  getWeathers,
  getId,
  (weathers, id) => {
    const weather = weathers.find((weather) => weather.id === id);
  }
);
