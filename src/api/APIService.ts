interface IAPIService {
  fetchData: () => void;
}

const headers = new Headers();
headers.append('Content-Type', 'text/plain');

type TForecast = {
  clouds: {
    all: number;
  },
  dt: number;
  dt_txt: string;
  main: {
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  },
  sys: {
    pod: string;
  },
  weather: [],
  wind: {
    deg: number;
    speed: number;
  }
}

interface IApiResponse {
  cnt: number;
  cod: string;
  list: TForecast[];
  message: number;
}


class APIService implements IAPIService {
  private URL: string = "forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22";
  async fetchData(): Promise<IApiResponse> {
    let response;
    try {
      response = await fetch(this.URL, {
        method: "GET",
        headers: headers
      });
    } catch (e) {
      console.error(e);
    }

    return response?.json();
  }
}

export default new APIService();


