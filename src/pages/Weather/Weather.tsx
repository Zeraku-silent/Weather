import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";

import { Container, Line } from "./styled";
import { weatherActions } from "../../modules/weather/slice";
import { getWeatherById } from "../../modules/weather/selectors";
import { RootState } from "../../modules";

export const Weather = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const weather = useSelector((state: RootState) =>
    getWeatherById(state, id ?? "")
  );
  useEffect(() => {
    const coord = {
      lat: searchParams.get("lat") ?? "",
      lon: searchParams.get("lon") ?? "",
    };
    if (!weather) {
      dispatch(weatherActions.requestWeather({ ...coord, id: id ?? "" }));
    }
  }, [weather, dispatch, id, searchParams]);
  //@ts-ignore
  return (
    <Container>
      <Line>Город {weather?.name}</Line>
      <Line>Температура: {weather?.main?.temp} градусов</Line>
      <Line>Ощущается как: {weather?.main?.feels_like} градусов</Line>
      <Line>Погода: {weather?.weather[0]?.main}</Line>
      <Line>Описание погоды: {weather?.weather[0]?.description}</Line>
      <Line>Скорость ветра: {weather?.wind?.speed} м/с</Line>
    </Container>
  );
};
