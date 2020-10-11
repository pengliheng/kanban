import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders test whether app in component', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('App');
  expect(linkElement).toBeInTheDocument();
});
