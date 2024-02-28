import axios from "axios";

export const CITIES_API_URL = "https://dev.me/api/module-app/v1-list-cities"; //POST где отправляется {type: 'city', query: `${cityName}`}
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"; //GET c lat, long

export const CITIES_API = axios.create({
  baseURL: CITIES_API_URL,
  headers: {
    Accept: "application/json",
    "x-api-key": "65df5fb084133b30a12cace0-1a58cd84190a",
  },
});

export const WEATHER_API = axios.create({
  baseURL: WEATHER_API_URL,
});
