import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SearchBar } from './SearchBar';

const mockStore = configureStore([]);

test('updates input value and triggers dispatch on submit', () => {
  // Create a mock Redux store
  const store = mockStore({});
  store.dispatch = jest.fn(); // Mock the dispatch function

  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  // Find the input element
  const inputElement = screen.getByPlaceholderText(/Search Reddit/i);

  // Simulate typing into the input
  fireEvent.change(inputElement, { target: { value: 'React' } });
  expect(inputElement.value).toBe('React'); // Assert the input value

  // Find and click the submit button
  const buttonElement = screen.getByRole('button', { name: /Search/i });
  fireEvent.click(buttonElement);

  // Assert that dispatch was called with the trimmed and lowercased search term
  expect(store.dispatch).toHaveBeenCalledWith({
    type: 'reddit/setQuery',
    payload: 'react',
  });

  // Assert that the input value is cleared after submission
  expect(inputElement.value).toBe('');
});
