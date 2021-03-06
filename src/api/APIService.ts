import { IApiService, IApiResponse } from "../types";

// endpoint
const API_URL = "forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22";

class APIService implements IApiService {
  private URL: string = API_URL;
  async fetchData(): Promise<IApiResponse> {
    let response;
    try {
      response = await fetch(this.URL, { method: "GET" });
    } catch (e) {
      console.error(e);
    }

    return response?.json();
  }
}

export default new APIService();
