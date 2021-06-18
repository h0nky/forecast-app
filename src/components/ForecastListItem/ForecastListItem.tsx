import { FC, ReactElement } from "react";
import { IForecastListItemProps } from "../../types";
import { SunIcon } from "../../icons";
import "./index.scss";

const ForecastListItem: FC<IForecastListItemProps> = ({ time, iconId, temperature }): ReactElement => (
  <li className="forecast-list__item">
    <div>
      {time}
    </div>
    <div>
      <SunIcon />
      {iconId}
    </div>
    <div>
      {temperature}
    </div>
  </li>
);

export default ForecastListItem;