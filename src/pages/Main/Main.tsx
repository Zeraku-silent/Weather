import { useSelector } from "react-redux";
import { FC, PropsWithChildren, useCallback } from "react";

import { RootState, useDispatch } from "../../modules";

import { citiesActions } from "../../modules/cities/slice";
import { weatherActions } from "../../modules/weather/slice";

import { Container, Item } from "./styled";
import { useNavigate } from "react-router";

interface MainProps {}

export const Main: FC<PropsWithChildren<MainProps>> = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cities = useSelector((state: RootState) => state.cities.items);

  const requestCity = useCallback(() => {
    dispatch(citiesActions.requestCities("Мос"));
  }, [dispatch]);

  const getWeather = (name: string, lat: number, lon: number) => {
    dispatch(weatherActions.requestWeather({ name, lat, lon, navigate }));
  };

  return (
    //@ts-ignore
    <Container>
      <button onClick={requestCity}>Get</button>
      <br />
      {cities?.map((city, i) => (
        <Item
          key={`${city.name} ${i}`}
          onClick={() => getWeather(city.name, city.lat, city.lon)}
        >
          {city.name} - / {city.lat}/{city.lon}
        </Item>
      ))}
    </Container>
  );
};
