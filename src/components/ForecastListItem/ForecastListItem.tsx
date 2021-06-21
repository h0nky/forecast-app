import { FC, ReactElement, useRef } from "react";
import { IForecastListItemProps } from "../../types";
import "./index.scss";

const ForecastListItem: FC<IForecastListItemProps> = ({
  time,
  iconId,
  temperature,
  id,
  onHandleClick
}): ReactElement => {
  const ref = useRef<any>(null); // TODO: replace any
  return (
    <li aria-label="list-item" id={id} ref={ref} className="forecast-list-item" onClick={() => onHandleClick(ref.current.id)}>
      <span className="forecast-list-item__time">
        {time}
      </span>
      <span className="forecast-list-item__icon-wrapper">
        {iconId}
      </span>
      <span className="forecast-list-item__temperature">
        {temperature}
      </span>
    </li>
  );
}

export default ForecastListItem;