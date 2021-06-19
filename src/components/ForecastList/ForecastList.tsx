import { ReactElement, FC } from "react";
import ForecastListItem from "../ForecastListItem";
import { TParsedForecast } from "../../types";
import "./index.scss";

// TODO: replace Math.random with ID!
const ForecastList: FC<{
  forecasts: TParsedForecast[],
  handleClick: (id: string) => void
}> = ({
  forecasts,
  handleClick
}): ReactElement => (
  <ul className="forecast-list">
    {forecasts?.map((forecast) => (
      <ForecastListItem
        id={forecast.id}
        key={forecast.id}
        time={forecast.time}
        iconId={forecast.icon}
        temperature={forecast.tempCurrent}
        onHandleClick={handleClick}
      />))}
  </ul>
);

export default ForecastList;