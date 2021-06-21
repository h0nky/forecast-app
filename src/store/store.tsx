import { createContext, ReactElement, FC, useState } from "react";
import { IApiResponse, IAppState, IContext } from "../types";
import { dataParser, getActivePeriod } from "../utils/utils";

const Context = createContext<IContext>({
  state: {
    forecasts:[],
    activePeriod: [],
    loading: true,
    error: false
  },
  updateState: () => {},
  switchPeriod: () => {},
  setError: () => {}
});

const initialState: IAppState = {
  forecasts: [],
  activePeriod: [],
  loading: true,
  error: false,
};

const Provider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        state,
        updateState: (response: IApiResponse) => {
          const parsedData = dataParser(response);
          setState({ ...state, forecasts: parsedData, activePeriod: parsedData[0], loading: false });
        },
        switchPeriod: (id: string) => {
          const activePeriod = getActivePeriod(id, state.forecasts);
          setState({ ...state, activePeriod })
        },
        setError: () => {
          setState({ ...state, error: true });
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context };