import { FC, ReactElement } from "react";
import MainPage from "./components/MainPage";
import { Context, Provider } from "./store";
import './App.scss';

const App: FC = (): ReactElement => (
  <Provider>
    <div className="app">
      <header className="app-header" />
      <Context.Consumer>
        {(context: any) => <MainPage {...context} />}
      </Context.Consumer>
    </div>
  </Provider>
);

export default App;
