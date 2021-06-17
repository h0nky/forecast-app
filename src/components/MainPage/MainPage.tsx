/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, FC, useEffect } from "react";
import APIService from "../../api/APIService";

const MainPage: FC<any> = (): ReactElement => {
  useEffect(() => {
    APIService.fetchData().then((result) => console.log(result));
  },[]);
  return (
    <div />
  );
}

export default MainPage;