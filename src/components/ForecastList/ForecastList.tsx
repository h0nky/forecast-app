import { ReactElement, FC } from "react";
import ForecastListItem from "../ForecastListItem";
import { TParsedForecast } from "../../types";
import "./index.scss";

// TODO: replace Math.random with ID!
const ForecastList: FC<{ forecasts: TParsedForecast[] }> = ({ forecasts }): ReactElement => (
  <ul className="forecast-list">
    {forecasts?.map((forecast) => (
      <ForecastListItem
        key={Math.random()}
        time={forecast.time}
        iconId={forecast.icon}
        temperature={forecast.tempCurrent}
      />))}
  </ul>
);

export default ForecastList;