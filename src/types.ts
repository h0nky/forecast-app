export interface IAppState {
  forecasts: TParsedForecast[];
  loading: boolean;
  error: boolean;
  activePeriod: any;
}

type TCity = {
  coord: {
    lat: number;
    lon: number;
  },
  country: string;
  id: number;
  name: string; // "Altstadt";
}

type TWeather = {
  description: string;
  icon: string; // Weather icon id
  id: number; 
  main: string
}

export type TForecast = {
  clouds: {
    all: number;
  },
  dt: number; // Time of data forecasted, unix, UTC
  dt_txt: string; // Time of data forecasted, ISO, UTC "2017-02-16 12:00:00"
  main: {
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number; // //current temperature
    temp_kf: number;
    temp_max: number; //max current temperature in the city
    temp_min: number; //min current temperature in the city
  },
  sys: {
    pod: string; // Part of the day (n - night, d - day)
  },
  weather: TWeather[],
  wind: {
    deg: number;
    speed: number;
  }
}

export interface IApiResponse {
  city: TCity;
  cnt: number;
  cod: string;
  list: TForecast[];
  message: number;
}

export interface IApiService {
  fetchData: () => void;
}

export type TParsedForecast = {
  dayName: string,
  tempCurrent: string,
  tempMin: string,
  tempMax: string,
  weather: string,
  icon: JSX.Element,
  city: string,
  time: string,
  id: string;
  dayNumeric: string;
  month: string;
};

export interface IForecastListItemProps {
  time: string;
  iconId: JSX.Element;
  temperature: string;
  id: string;
  onHandleClick: (id: string) => void;
};