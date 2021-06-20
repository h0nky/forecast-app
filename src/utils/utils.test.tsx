import { dataParser, kelvinToCelsius, parseDate, getActivePeriod } from "./utils";
import { IApiResponse } from "../types";

test('dataParser method test', () => {
  const mockApiResponse: IApiResponse = {
    city: null,
    cnt: null,
    cod: '',
    list: [],
    message: 0
  };
  const mockDataParser = jest.fn().mockImplementation(dataParser);
  mockDataParser(mockApiResponse);
  
  expect(mockDataParser).toHaveBeenCalled();
  expect(mockDataParser).toBeCalledTimes(1);
  expect(mockDataParser).toHaveBeenCalledWith(mockApiResponse);
  expect(mockDataParser).toReturnWith([]);
});

test('kelvinToCelsius method test', () => {
  const mockValue = 286.67; // Is equal to 13°
  const mockKelvinToCelsius = jest.fn().mockImplementation(kelvinToCelsius);
  mockKelvinToCelsius(mockValue);

  expect(mockKelvinToCelsius).toHaveBeenCalled();
  expect(mockKelvinToCelsius).toBeCalledTimes(1);
  expect(mockKelvinToCelsius).toHaveBeenCalledWith(mockValue);
  expect(mockKelvinToCelsius).toReturnWith('13°');
  expect(mockKelvinToCelsius).toReturnTimes(1);
});

test('parseDate method test', () => {
  const mockDate = ["2017-02-16 12:00:00", {  weekday: 'long' }]; // Is equal to Thursday
  const mockParseDate = jest.fn().mockImplementation(parseDate);
  mockParseDate(...mockDate);

  expect(mockParseDate).toHaveBeenCalled();
  expect(mockParseDate).toBeCalledTimes(1);
  expect(mockParseDate).toHaveBeenCalledWith(...mockDate);
  expect(mockParseDate).toReturnWith("Thursday");
  expect(mockParseDate).toReturnTimes(1);
});

test('getActivePeriod method test', () => {
  const mockForecast = [
    {
      city: "Altstadt",
      dayName: "Thursday",
      dayNumeric: "16",
      icon: null,
      id: "0",
      month: "February",
      tempCurrent: "13°",
      tempMax: "13°",
      tempMin: "8°",
      time: "12:00",
      weather: "Clear",
    },
    {
      city: "Altstadt",
      dayName: "Thursday",
      dayNumeric: "16",
      icon: null,
      id: "5",
      month: "February",
      tempCurrent: "13°",
      tempMax: "13°",
      tempMin: "8°",
      time: "12:00",
      weather: "Clear",
    },
  ];

  const mockGetActivePeriod = jest.fn().mockImplementation(getActivePeriod);
  mockGetActivePeriod("5", mockForecast);

  expect(mockGetActivePeriod).toHaveBeenCalled();
  expect(mockGetActivePeriod).toBeCalledTimes(1);
  expect(mockGetActivePeriod).toHaveBeenCalledWith("5", mockForecast);
  expect(mockGetActivePeriod).toReturnWith(mockForecast[1]);
  expect(mockGetActivePeriod).toReturnTimes(1);
});
