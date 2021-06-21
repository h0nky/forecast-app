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
  switchPeriod,
  setError
}): ReactElement => {
  const fetchForecasts = useForecast(updateState, setError);
  const { error, loading, activePeriod, forecasts } = state;

  useEffect(() => {
    fetchForecasts();
  },[]);

  if (error) return <Notification text="Something went wrong. Check your internet connection and try again!" />

  return (
    <main
      aria-label="main-page"
      className="main-page"
    >
      {loading ? null :
      (
        <div
          aria-label="main-content"
          className="main-content"
        >
          <ForecastDetails {...activePeriod} />
          <ForecastList
            forecasts={forecasts}
            handleClick={switchPeriod}
          />
        </div>)}
    </main>
  );
}

export default MainPage;