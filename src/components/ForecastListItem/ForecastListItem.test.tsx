import React from "react";
import { render, fireEvent } from '@testing-library/react';
import ForecastListItem from "./ForecastListItem";

const mockData = {
  time: '',
  iconId: <div />,
  temperature: '',
  id: '',
  onHandleClick: () => {}
};

const setup = (onHandleClick = () => {}) => {
  const utils = render(
    <ForecastListItem {...mockData} onHandleClick={onHandleClick} />
  );

  return utils;
}

test('Check list item render', () => {
  const utils = setup();
  const listItem = utils.getAllByLabelText('list-item');

  expect(listItem).toBeTruthy();
});

test('Check onHandleClick method call', () => {
  const onHandleClick = jest.fn();
  const { getByLabelText } = render(
    <ForecastListItem {...mockData} onHandleClick={onHandleClick} />
  );

  fireEvent.click(getByLabelText(/list-item/i));

  expect(onHandleClick).toHaveBeenCalledTimes(1);
  expect(onHandleClick).toReturn();
});