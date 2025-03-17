import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRedditData } from "../store/redditSlice";
import { RedditPost } from "./RedditPost";
import { createSelector } from "reselect";

export const RedditPosts = () => {
  // Retrieve multiple state properties in a single selector
  // const {
  //   posts,
  //   status,
  //   query: searchTerm,
  // } = useSelector((state) => ({
  //   posts: state.reddit.posts,
  //   status: state.reddit.status,
  //   query: state.reddit.query,
  // }));

  // Input selectors
  const selectPosts = (state) => state.reddit.posts;
  const selectStatus = (state) => state.reddit.status;
  const selectQuery = (state) => state.reddit.query;

  // Memoized selector
  const selectRedditState = createSelector(
    [selectPosts, selectStatus, selectQuery],
    (posts, status, query) => ({
      posts,
      status,
      query,
    })
  );

  // Use the memoized selector
  const { posts, status, query } = useSelector(selectRedditState);

  const searchTerm = query; // Rename query to searchTerm for clarity
  console.log("test term" + searchTerm);

  const dispatch = useDispatch(); //dispatch function to dispatch actions

  useEffect(() => {
    //fetch the Reddit data when the component mounts
    if (status === "idle") {
      dispatch(fetchRedditData("popular"));
    }
  }, [status, dispatch]);

  // Conditional logging to avoid logging empty arrays
  useEffect(() => {
    if (posts.length > 0) {
      console.log(posts); // Log only when posts contain data
    }
  }, [posts]);

  // Filter the posts based on the search term
  const filteredPosts = posts.filter((post) =>
    searchTerm ? post.title.toLowerCase().split(" ").includes(searchTerm) : true
  );

  return (
    <div>
      <h1>Reddit Posts</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed</p>}
      {status === "succeeded" &&
        (posts.length === 0 ? (
          <p>No posts available</p>
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <RedditPost key={post.id} post={post} />)
        ) : (
          <p>No posts found</p>
        ))}
    </div>
  );
};
