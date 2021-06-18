import { useCallback } from "react";
import APIService from "../api/APIService";
import { IApiResponse } from "../types";

const useForecast = (updateState: (state: IApiResponse) => void) => {
  const fetchForecasts = useCallback(async (): Promise<void> => {
    const result = await APIService.fetchData();
    updateState(result);
  },[updateState]);

  return fetchForecasts;
}

export default useForecast;