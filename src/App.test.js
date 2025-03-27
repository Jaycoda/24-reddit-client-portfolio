import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import redditReducer, { setQuery } from './store/redditSlice';

import App from './App';

import userEvent from '@testing-library/user-event';

import { configureStore } from '@reduxjs/toolkit';

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

//intergrated search and filter result test

test('SearchBar filters RedditPosts based on input', async () => {
  // Create a real Redux store with initial state
  const store = configureStore({
    reducer: { reddit: redditReducer },
    preloadedState: {
      reddit: {
        posts: [
          { id: '1', title: 'React is awesome' },
          { id: '2', title: 'Testing React components' },
          { id: '3', title: 'Redux in a nutshell' },
        ],
        status: 'succeeded',
        query: '',
      },
    },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Ensure all posts are displayed initially
  expect(screen.getByText(/React is awesome/i)).toBeInTheDocument();
  expect(screen.getByText(/Testing React components/i)).toBeInTheDocument();
  expect(screen.getByText(/Redux in a nutshell/i)).toBeInTheDocument();

  // OPTION 1: Get search input and type "React"
  // const searchInput = screen.getByPlaceholderText(/Search Reddit/i);
  // await userEvent.clear(searchInput); // Ensure input is empty before typing
  // await userEvent.type(searchInput, 'React');

  // OPTION 1: Simulate pressing Enter (if necessary in your app)
  // await userEvent.keyboard('{Enter}');

  // OPTION 2: Get search input and type "React"
  const searchInput = screen.getByPlaceholderText(/Search Reddit/i);
  fireEvent.change(searchInput, { target: { value: 'React' } });

  // OPTION 2: Get the search button and click it
  const searchButton = screen.getByRole('button', { name: /Search/i }); // Adjust the button role and name accordingly
  fireEvent.click(searchButton);

  // 🔥 Wait for state updates & UI to reflect the filtering
  await waitFor(() => {
    expect(screen.getByText(/React is awesome/i)).toBeInTheDocument();
    expect(screen.queryByText(/Testing React components/i)).toBeInTheDocument();
    expect(screen.queryByText(/Redux in a nutshell/i)).not.toBeInTheDocument();
  });
});
