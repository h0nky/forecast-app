import { FC, ReactElement } from "react";
import MainPage from "../MainPage";
import { Context, Provider } from "../../store";
import { IContext } from "../../types";
import './index.scss';

const App: FC = (): ReactElement => (
  <Provider>
    <div className="app">
      <Context.Consumer>
        {(context: IContext) => <MainPage {...context} />}
      </Context.Consumer>
    </div>
  </Provider>
);

export default App;
