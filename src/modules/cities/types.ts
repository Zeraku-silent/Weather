import { REQUEST_STATUS } from "../../core/api/types";

export interface City {
  id: number;
  countryCode: string;
  countryName: string;
  latitude: number;
  longitude: number;
  name: string;
  stateCode: string;
  stateName: string;
}

export interface CitiesState {
  items: City[];
  status: REQUEST_STATUS;
}
