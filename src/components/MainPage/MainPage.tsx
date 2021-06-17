/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, FC, useEffect } from "react";
import useForecast from "../../hooks/useForecast";

const MainPage: FC<{ state: any, updateState: () => void }> = ({ state, updateState }): ReactElement => {
  const fetchForecasts = useForecast(updateState);
  useEffect(() => {
    fetchForecasts();
  },[]);
  return (
    <div />
  );
}

export default MainPage;