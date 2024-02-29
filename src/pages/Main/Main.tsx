import { useSelector } from "react-redux";
import { FC, PropsWithChildren, useCallback } from "react";

import { RootState, useDispatch } from "../../modules";
import { citiesActions } from "../../modules/cities/slice";

import { Container, Item } from "./styled";

interface MainProps {
  text: string;
}

export const Main: FC<PropsWithChildren<MainProps>> = ({ text }) => {
  const dispatch = useDispatch();

  const cities = useSelector((state: RootState) => state.cities.items);

  const requestCity = useCallback(() => {
    dispatch(citiesActions.requestCities("Мос"));
  }, [dispatch]);

  return (
    //@ts-ignore
    <Container>
      <button onClick={requestCity}>Get Moscow</button>
      <br />
      {cities?.map((city, i) => (
        <Item key={`${city.locale_names.ru} ${i}`}>{city.locale_names.ru}</Item>
      ))}
    </Container>
  );
};
