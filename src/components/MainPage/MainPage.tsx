/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, FC, useEffect } from "react";
import ForecastList from "../ForecastList";
import { IAppState } from "../../types";
import useForecast from "../../hooks/useForecast";

const MainPage: FC<{ state: IAppState, updateState: () => void }> = ({ state, updateState }): ReactElement => {
  const fetchForecasts = useForecast(updateState);

  useEffect(() => {
    fetchForecasts();
  },[]);
  
  return (
    <main>
      <section>
        <ForecastList forecasts={state.forecasts} />
      </section>
    </main>
  );
}

export default MainPage;