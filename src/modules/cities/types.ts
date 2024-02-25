export interface City {
  lat: number;
  lng: number;
}

export interface CitiesState {
  cities: City[];
  isLoading: boolean;
}
