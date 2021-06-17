import { createContext, ReactElement, FC, useState } from "react";

const Context = createContext({});

const initialState = {};

const Provider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        state,
        updateState: (data: any) => {
          setState(data);
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context };