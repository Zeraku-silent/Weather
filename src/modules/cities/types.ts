import { REQUEST_STATUS } from "../../core/api/types";

export interface City {
  locale_names: {
    ru: string;
  };
  lat: number;
  lng: number;
}

export interface CitiesState {
  items: City[];
  status: REQUEST_STATUS;
}
