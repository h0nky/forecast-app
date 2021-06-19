import { createContext, ReactElement, FC, useState } from "react";
import { IApiResponse, IAppState } from "../types";
import { dataParser, getActivePeriod } from "../utils";

const Context = createContext({});

const initialState: IAppState = {
  forecasts: [],
  activePeriod: [],
  loading: false,
  error: false,
};

// TODO: handle errors and loading states!
const Provider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        state,
        updateState: (data: IApiResponse) => {
          const parsedData = dataParser(data);
          setState({ ...state, forecasts: parsedData, activePeriod: parsedData[0] });
        },
        switchPeriod: (id: string) => {
          const activePeriod = getActivePeriod(id, state.forecasts);
          setState({ ...state, activePeriod })
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context };