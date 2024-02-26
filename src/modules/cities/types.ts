import { REQUEST_STATUS } from "../../core/api/types";

export interface City {
  lat: number;
  lng: number;
}

export interface CitiesState {
  cities: City[];
  status: REQUEST_STATUS;
}
