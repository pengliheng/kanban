import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import Dashboard from './dashboard';
import store from '../store'
import { ACTION_TYPE } from '../utils/constants'

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={store}>{children}</Provider>
)

test('renders run dashboard', () => {
  const { getByTestId, getByText } = render(
    <ReduxProvider>
      <Dashboard />
    </ReduxProvider>
  );
  const containerElement = getByTestId('dashboard');
  expect(containerElement).toBeInTheDocument();
  store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'test task'
  })
  const newTaskElement = getByText(/test task/i);
  expect(newTaskElement).toBeInTheDocument();
});
