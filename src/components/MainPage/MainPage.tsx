/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, FC, useEffect } from "react";
import ForecastDetails from "../ForecastDetails";
import ForecastList from "../ForecastList";
import { IAppState } from "../../types";
import useForecast from "../../hooks/useForecast";
import "./index.scss";

const MainPage: FC<{
  state: IAppState,
  updateState: () => void,
  switchPeriod: (id: string) => void
}> = ({
  state,
  updateState,
  switchPeriod 
}): ReactElement => {
  const fetchForecasts = useForecast(updateState);

  useEffect(() => {
    fetchForecasts();
  },[]);
  
  return (
    <main className="main-page">
      <ForecastDetails {...state.activePeriod} />
      <ForecastList
        forecasts={state.forecasts}
        handleClick={switchPeriod}
      />
    </main>
  );
}

export default MainPage;