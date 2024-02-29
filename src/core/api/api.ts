import axios from "axios";

export const CITIES_API_URL = "https://api.openweathermap.org/geo/1.0/direct"; //GET q={city name},{state code},{country code}&limit={limit}&appid={API key}
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"; //GET c lat, long

export const CITIES_API = axios.create({
  baseURL: CITIES_API_URL,
});

export const WEATHER_API = axios.create({
  baseURL: WEATHER_API_URL,
});
