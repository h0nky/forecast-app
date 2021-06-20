import { TForecast, IApiResponse, TParsedForecast } from "../types";
import { getWeatherIcon } from "../assets/icons";

// Converts temperature in Kelvin to Celsius
export const kelvinToCelsius = (k: number): string => Math.floor(k - 273.15) + `°`;

// Parse date string to a separate date values
export const parseDate = (date: string, options: {[key:string]: string|boolean}): string => new Date(date).toLocaleString('en-us', options);

// Parse response data. Returns an array of forecasts ready to be rendered
export const dataParser = (forecastData: IApiResponse): TParsedForecast[] => {
  const { city, list } = forecastData;
  const parsedForecast = list?.map((item: TForecast, index: number) => {
    return {
      id: String(index),
      dayName: parseDate(item.dt_txt, {weekday: 'long'}),
      month: parseDate(item.dt_txt, {month: 'long'}),
      dayNumeric: parseDate(item.dt_txt, {day: 'numeric'}),
      time: parseDate(item.dt_txt, {hour: '2-digit', minute:'2-digit', hour12: false}),
      tempCurrent: kelvinToCelsius(item.main.temp),
      tempMin: kelvinToCelsius(item.main.temp_min),
      tempMax: kelvinToCelsius(item.main.temp_max),
      weather: item.weather[0].main,
      icon: getWeatherIcon(item.weather[0].icon),
      city: city.name,
    }
  });

  return parsedForecast;
};

// Returns an array with selected forecast for a specific time period
export const getActivePeriod = (id: string, forecasts: TParsedForecast[]): TParsedForecast => {
  return forecasts.filter(forecast => forecast.id === id)[0];
};