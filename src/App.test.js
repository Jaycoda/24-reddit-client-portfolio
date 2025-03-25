import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store/store';

test('store should be defined', () => {
  // assertions
  expect(store).toBeDefined();
  expect(store.getState).toBeDefined();
});

test('display the heading text', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // assertions
  const linkElement = screen.getByText(/reddit posts/i);
  expect(linkElement).toBeInTheDocument();
});
