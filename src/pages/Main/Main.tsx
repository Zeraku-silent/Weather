import { useSelector } from "react-redux";
import { FC, PropsWithChildren, useCallback } from "react";

import { RootState, useDispatch } from "../../modules";
import { citiesActions } from "../../modules/cities/slice";

import { Container } from "./styled";

interface MainProps {
  text: string;
}

export const Main: FC<PropsWithChildren<MainProps>> = ({ text }) => {
  const dispatch = useDispatch();

  const aboba = useSelector((state: RootState) => state.cities);

  const sayZhopa = useCallback(() => {
    dispatch(citiesActions.setText("zhopa"));
  }, [dispatch]);

  return (
    <Container>
      <button onClick={sayZhopa}>Say Zhopa!</button>
      {aboba}
    </Container>
  );
};
