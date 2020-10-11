import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import Board from './board';
import store from '../store'

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={store}>{children}</Provider>
)

test('board component test', () => {
  const { getByTestId } = render(
    <ReduxProvider>
      <Board />
    </ReduxProvider>
  );
  const containerElement = getByTestId('board');
  expect(containerElement).toBeInTheDocument();
});
