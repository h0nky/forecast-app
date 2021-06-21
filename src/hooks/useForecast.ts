import { useCallback } from "react";
import APIService from "../api/APIService";
import { IApiResponse } from "../types";

const useForecast = (updateState: (state: IApiResponse) => void, setError: () => void) => {
  const fetchForecasts = useCallback(async (): Promise<void> => {
    let result;
    try {
      result = await APIService.fetchData();
      updateState(result);
    } catch (e) {
      setError();
    }
  },[updateState, setError]);

  return fetchForecasts;
}

export default useForecast;