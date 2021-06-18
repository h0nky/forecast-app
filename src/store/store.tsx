import { createContext, ReactElement, FC, useState } from "react";
import { dataParser } from "../utils";

const Context = createContext({});

const initialState = {};
// TODO: handle errors and loading!
const Provider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        state,
        updateState: (data: any) => {
          const parsedData = dataParser(data);
          setState(parsedData);
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context };