import { TForecast, IApiResponse } from "./types";

type TParsedForecast = {
  dayName: string,
  tempCurrent: number,
  tempMin: number,
  tempMax: number,
  weather: string,
  icon: string,
  city: string,
  time: string,
};

// Converts temperature in Kelvin to Celsius
const kelvinToCelsius = (k: number): number => Math.floor(k - 273.15);

// Parse date string to a separate date values
const parseDate = (date: string, options: {[key:string]: string|boolean}): string => new Date(date).toLocaleString('en-us', options);

export const dataParser = (forecastData: IApiResponse): TParsedForecast[] => {
  const { city, list } = forecastData;
  const parsedForecast = list?.map((item: TForecast) => {
    return {
      dayName: parseDate(item.dt_txt, {weekday: 'long'}),
      month: parseDate(item.dt_txt, {month: 'long'}),
      dayNumeric: parseDate(item.dt_txt, {day: 'numeric'}),
      time: parseDate(item.dt_txt, {hour: '2-digit', minute:'2-digit', hour12: false}),
      tempCurrent: kelvinToCelsius(item.main.temp),
      tempMin: kelvinToCelsius(item.main.temp_min),
      tempMax: kelvinToCelsius(item.main.temp_max),
      weather: item.weather[0].main,
      icon: item.weather[0].icon,
      city: city.name,
    }
  });
  console.log(parsedForecast);
  return parsedForecast;
};