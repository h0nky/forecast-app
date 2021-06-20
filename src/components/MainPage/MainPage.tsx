/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, FC, useEffect } from "react";
import ForecastDetails from "../ForecastDetails";
import ForecastList from "../ForecastList";
import Notification from "../Notification";
import { IContext } from "../../types";
import useForecast from "../../hooks/useForecast";
import "./index.scss";

const MainPage: FC<IContext> = ({
  state,
  updateState,
  switchPeriod 
}): ReactElement => {
  const fetchForecasts = useForecast(updateState);
  const { error, loading, activePeriod, forecasts } = state;

  useEffect(() => {
    fetchForecasts();
  },[]);

  if (error) return <Notification text="Something went wrong. Check your internet connection and try again!" />

  return (
    <main className="main-page">
      {loading ? null :
      (
        <>
          <ForecastDetails {...activePeriod} />
          <ForecastList
            forecasts={forecasts}
            handleClick={switchPeriod}
          />
        </>)}
    </main>
  );
}

export default MainPage;