import { createContext, ReactElement, FC, useState } from "react";
import { IApiResponse, TParsedForecast } from "../types";
import { dataParser } from "../utils";

const Context = createContext({});

export interface IAppState {
  forecasts: TParsedForecast[];
  loading: boolean;
  error: boolean;
}

const initialState: IAppState = {
  forecasts: [],
  loading: false,
  error: false,
};

// TODO: handle errors and loading!
const Provider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        state,
        updateState: (data: IApiResponse) => {
          const parsedData = dataParser(data);
          setState({ ...state, forecasts: parsedData, });
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context };