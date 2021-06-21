import React from "react";
import { render } from '@testing-library/react';
import MainPage from "./MainPage";


const mockContextSuccess = {
  state: {
    forecasts:[],
    activePeriod: [],
    loading: true,
    error: false
  },
  updateState: () => {},
  switchPeriod: () => {},
  setError: () => {}
};

const mockContextError = {
  state: {
    forecasts:[],
    activePeriod: [],
    loading: true,
    error: true
  },
  updateState: () => {},
  switchPeriod: () => {},
  setError: () => {}
};

const mockContextLoadingFalse = {
  state: {
    forecasts:[],
    activePeriod: [],
    loading: false,
    error: false
  },
  updateState: () => {},
  switchPeriod: () => {},
  setError: () => {}
};

const setup = (mockProps) => {
  const utils = render(
    <MainPage {...mockProps} />
  );

  return utils;
}

test('Check main page render if [error=false]', () => {
  const utils = setup(mockContextSuccess);
  const mainPage = utils.getAllByLabelText('main-page');

  expect(mainPage).toBeTruthy();
});

test('Check main page render if [error=true]', () => {
  const utils = setup(mockContextError);
  const mainPage = utils.getAllByLabelText('error');

  expect(mainPage).toBeTruthy();
});

test('Check main page render if [loading=false]', () => {
  const utils = setup(mockContextLoadingFalse);
  const mainPage = utils.getAllByLabelText('main-content');

  expect(mainPage).toBeTruthy();
});