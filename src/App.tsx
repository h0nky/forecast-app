import { FC, ReactElement } from "react";
import MainPage from "./components/MainPage";
import './App.scss';

const App: FC = (): ReactElement => (
  <div className="app">
    <header className="app-header" />
    <MainPage />
  </div>
);

export default App;
