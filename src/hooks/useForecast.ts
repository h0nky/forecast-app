import { useCallback } from "react";
import APIService from "../api/APIService";
import { IApiResponse } from "../types";

const useForecast = (updateState: (state: IApiResponse | null) => void) => {
  const fetchForecasts = useCallback(async (): Promise<void> => {
    let result;
    try {
      result = await APIService.fetchData();
      updateState(result);
    } catch (e) {
      updateState(null);
    }
  },[updateState]);

  return fetchForecasts;
}

export default useForecast;