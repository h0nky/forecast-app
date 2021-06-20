import { FC, ReactElement } from "react";
import { TParsedForecast } from "../../types";
import "./index.scss";

const ForecastDetails: FC<TParsedForecast> = ({
  tempCurrent,
  dayName,
  tempMin,
  tempMax,
  weather,
  icon,
  city,
  dayNumeric,
  month 
}): ReactElement => (
  <div className="forecast-details">
    <div className="forecast-details__icon">{icon}</div>
    <div>
      <div className="forecast-details__title-wrapper">
        <span className="forecast-details__title">{weather}</span>
        <span className="forecast-details__title">{`${tempMin} / ${tempMax}`}</span>
      </div>
      <span className="forecast-details__current">{tempCurrent}</span>
    </div>
    <div className="forecast-details__date">
      <span className="forecast-details__title">{city}</span>
      <span className="forecast-details__subtitle">{dayName}</span>
      <div>
        <span className="forecast-details__subtitle">{`${dayNumeric}.`}</span>
        <span className="forecast-details__subtitle">{month}</span>
      </div>
    </div>
  </div>
);

export default ForecastDetails;