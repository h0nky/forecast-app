import { useCallback } from "react";
import APIService from "../api/APIService";

const useForecast = (updateState: (state: any) => void) => {
  const fetchForecasts = useCallback(async (): Promise<any> => {
    const result = await APIService.fetchData();
    updateState(result);
  },[updateState]);

  return fetchForecasts;
}

export default useForecast;