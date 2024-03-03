import { useState, ChangeEvent, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { citiesActions } from "../../../../modules/cities/slice";
import { RootState } from "../../../../modules";
import { weatherActions } from "../../../../modules/weather/slice";

import { Container, Item } from "./styled";
import debounce from "debounce";

export const Search = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cities = useSelector((state: RootState) => state.cities.items);

  const [inputValue, setInputValue] = useState("");

  const handleSetInputValue = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
    500
  );

  const search = useCallback(
    (value: string) => {
      dispatch(citiesActions.requestCities(value));
    },
    [dispatch]
  );

  const clear = useCallback(
    () => dispatch(citiesActions.clearCities()),
    [dispatch]
  );

  const getWeather = (id: string, lat: number, lon: number) => {
    dispatch(weatherActions.requestWeather({ id, lat, lon, navigate }));
  };

  useEffect(() => {
    if (inputValue.trim() === "") {
      clear();
      return;
    }
    if (inputValue) {
      search(inputValue);
    }
  }, [inputValue, clear, search]);

  return (
    <Container>
      <input placeholder="Find city..." onChange={handleSetInputValue} />
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
