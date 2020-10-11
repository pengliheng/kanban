import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import Control from './control';
import store from '../store'
import { ACTION_TYPE } from '../utils/constants'

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={store}>{children}</Provider>
)

test('control component test', () => {
  const { getByTestId } = render(
    <ReduxProvider>
      <Control />
    </ReduxProvider>
  );
  const containerElement = getByTestId('control');
  expect(containerElement).toBeInTheDocument();
  store.dispatch({
    type: ACTION_TYPE.SELECT_TASK,
    payload: {
      id: 1,
      name: 'selected test task'
    }
  })
  const inputElement = getByTestId('selectInput');
  expect(inputElement.value).toBe('selected test task');
  
});
