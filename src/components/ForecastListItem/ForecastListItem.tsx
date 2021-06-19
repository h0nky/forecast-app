import { FC, ReactElement, useRef } from "react";
import { IForecastListItemProps } from "../../types";
import { SunIcon, CloudIcon } from "../../icons";
import "./index.scss";

const icons: { [key: string]: JSX.Element } = {
  '01d': <SunIcon width="120px" />,
  '01n': <CloudIcon width="120px" />
};

const ForecastListItem: FC<IForecastListItemProps> = ({ time, iconId, temperature, id, onHandleClick }): ReactElement => {
  const ref = useRef<any>(null); // TODO: fix any
  return (
    <li id={id} ref={ref} className="forecast-list-item" onClick={() => onHandleClick(ref.current.id)}>
      <span className="forecast-list-item__time">
        {time}
      </span>
        {icons[iconId]}
      <span className="forecast-list-item__temperature">
        {temperature}
      </span>
    </li>
  );
}

export default ForecastListItem;