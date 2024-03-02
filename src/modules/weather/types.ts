import { REQUEST_STATUS } from "../../core/api/types";

export interface Weather {
  id: number;
  city: string;
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    main: string;
  };
  main: {
    temp: number;
  };
}

export interface WeatherRequest {
  lat: number | string;
  lon: number | string;
  navigate?: unknown;
  name?: string;
}

export interface WeatherState {
  items: Weather[];
  status: REQUEST_STATUS;
}
