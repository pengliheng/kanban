import React from 'react';
import { render } from '@testing-library/react';
import Item from './item';

test('item component test: empty task', () => {
  const { getByTestId } = render(<Item taskList={[]}/>);
  const containerElement = getByTestId('item');
  expect(containerElement).toBeInTheDocument();
});

test('item component test: two task', () => {
  const { getByText } = render(<Item taskList={[{id: 1, name: 'test task 01'}, {id: 2, name: 'test task 02'}]}/>);
  const task1Element = getByText(/test task 01/i);
  expect(task1Element).toBeInTheDocument();
  const task2Element = getByText(/test task 02/i);
  expect(task2Element).toBeInTheDocument();
});
