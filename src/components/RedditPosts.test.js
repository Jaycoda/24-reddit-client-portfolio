import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { RedditPosts } from './RedditPosts';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('testing heading, loading, no post and filter', () => {
  test('display the heading text', () => {
    render(
      <Provider store={store}>
        <RedditPosts />
      </Provider>
    );

    // assertions
    const linkElement = screen.getByText(/reddit posts/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders "Loading..." when status is loading', () => {
    const store = mockStore({
      reddit: {
        posts: [],
        status: 'loading',
        query: '',
      },
    });

    render(
      <Provider store={store}>
        <RedditPosts />
      </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('renders "No posts available" when there are no posts', () => {
    const store = mockStore({
      reddit: {
        posts: [],
        status: 'succeeded',
        query: '',
      },
    });

    render(
      <Provider store={store}>
        <RedditPosts />
      </Provider>
    );

    expect(screen.getByText(/No posts available/i)).toBeInTheDocument();
  });

  test('filters posts based on the search term', () => {
    const store = mockStore({
      reddit: {
        posts: [
          { id: '1', title: 'React Rocks' },
          { id: '2', title: 'Redux Simplified' },
        ],
        status: 'succeeded',
        query: 'react',
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <RedditPosts />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/React Rocks/i)).toBeInTheDocument();
    expect(screen.queryByText(/Redux Simplified/i)).toBeNull();
  });
});
