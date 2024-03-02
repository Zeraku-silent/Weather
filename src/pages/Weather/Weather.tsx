import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";

import { Container } from "./styled";
import { weatherActions } from "../../modules/weather/slice";

export const Weather = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const coord = {
      lat: searchParams.get("lat") ?? "",
      lon: searchParams.get("lon") ?? "",
    };
    dispatch(weatherActions.requestWeather(coord));
  }, []);

  return <Container>{id}</Container>;
};
