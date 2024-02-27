import { REQUEST_STATUS } from "../../core/api/types";

export interface City {
  id: string;
  lat: number;
  lng: number;
}

export interface CitiesState {
  items: City[];
  status: REQUEST_STATUS;
}
