import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { posts } from "../data/samplePost";

// Initial state
const initialState = {
  posts: [],
  status: "idle",
  error: null,
  query: null, // update the search query
  comments: {},
};

// Async thunk to fetch Reddit data based on category
export const fetchRedditData = createAsyncThunk(
  "reddit/fetchRedditData",
  async (category) => {
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${category}.json?limit=10`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Reddit data");
      }
      const data = await response.json();
      return data.data.children.map((post) => post.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

// Async thunk to fetch comments for a post
export const fetchPostComments = createAsyncThunk(
  "reddit/fetchPostComments",
  async (postId) => {
    try {
      const response = await fetch(
        `https://www.reddit.com/comments/${postId}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await response.json();
      return data[1].data.children.map((comment) => comment.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

// slice, initial data and reducers
const redditSlice = createSlice({
  name: "reddit",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },

  // extra reducers to handle the fetchRedditData async thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedditData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRedditData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchRedditData.rejected, (state, action) => {
        state.status = "failed";
        state.posts = [];
        state.error = action.error.message;
      });
  },
});

export const { setQuery, setPosts, setStatus, setError } = redditSlice.actions;
export default redditSlice.reducer;
