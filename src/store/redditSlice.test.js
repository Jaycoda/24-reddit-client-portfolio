// redditSlice.test.js
import reducer, {
  setQuery,
  setPosts,
  setStatus,
  setError,
  fetchRedditData,
} from './redditSlice';

describe('redditSlice', () => {
  const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    query: null,
    comments: {},
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle setQuery', () => {
    const query = 'reactjs';
    const nextState = reducer(initialState, setQuery(query));
    expect(nextState.query).toBe(query);
  });

  it('should handle setPosts', () => {
    const posts = [{ id: 1, title: 'Post 1' }];
    const nextState = reducer(initialState, setPosts(posts));
    expect(nextState.posts).toEqual(posts);
  });

  it('should handle setStatus', () => {
    const status = 'loading';
    const nextState = reducer(initialState, setStatus(status));
    expect(nextState.status).toBe(status);
  });

  it('should handle setError', () => {
    const error = 'Error message';
    const nextState = reducer(initialState, setError(error));
    expect(nextState.error).toBe(error);
  });
});

// testing extraReducers

describe('redditSlice extraReducers', () => {
  const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    query: null,
    comments: {},
  };

  it('should handle fetchRedditData.pending', () => {
    const nextState = reducer(initialState, fetchRedditData.pending());
    expect(nextState.status).toBe('loading');
    expect(nextState.posts).toEqual([]);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchRedditData.fulfilled', () => {
    const mockPosts = [{ id: 1, title: 'Post 1' }];
    const nextState = reducer(
      initialState,
      fetchRedditData.fulfilled(mockPosts)
    );
    expect(nextState.status).toBe('succeeded');
    expect(nextState.posts).toEqual(mockPosts);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchRedditData.rejected', () => {
    const mockError = { message: 'Fetch failed' };
    const nextState = reducer(
      initialState,
      fetchRedditData.rejected(mockError)
    );
    expect(nextState.status).toBe('failed');
    expect(nextState.posts).toEqual([]);
    expect(nextState.error).toBe(mockError.message);
  });
});
