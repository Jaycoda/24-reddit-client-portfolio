import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { posts } from "../data/samplePost";

// Initial state
const initialState = {
  posts: posts,
  status: "idle",
  error: null,
  query: "popular",
};

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
});

export const { setQuery, setPosts, setStatus, setError } = redditSlice.actions;
export default redditSlice.reducer;
