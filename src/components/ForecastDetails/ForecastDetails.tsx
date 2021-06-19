import { FC, ReactElement } from "react";
import { TParsedForecast } from "../../types";


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
    <span>{tempCurrent}</span>
    <span>{dayName}</span>
    <span>{tempMin}</span>
    <span>{tempMax}</span>
    <span>{weather}</span>
    <span>{icon}</span>
    <span>{city}</span>
    <span>{dayNumeric}</span>
    <span>{month}</span>
  </div>
);

export default ForecastDetails;