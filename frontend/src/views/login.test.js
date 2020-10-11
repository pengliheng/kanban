import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import Login from './login';
import store from '../store'
import { ACTION_TYPE } from '../utils/constants'

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={store}>{children}</Provider>
)

test('renders run login', () => {
  const { getByTestId, getByText } = render(
    <ReduxProvider>
      <Login />
    </ReduxProvider>
  );
  const containerElement = getByTestId('login');
  expect(containerElement).toBeInTheDocument();
});
