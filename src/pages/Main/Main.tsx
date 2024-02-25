import { useSelector } from "react-redux";
import { useCallback } from "react";

import { RootState, useDispatch } from "../../modules";
import { citiesActions } from "../../modules/cities/slice";

export const Main = () => {
  const aboba = useSelector((state: RootState) => state.cities);
  const dispatch = useDispatch();

  return <>{aboba}</>;
};
