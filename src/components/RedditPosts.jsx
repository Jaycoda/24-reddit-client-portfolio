import React from "react";
import { useSelector } from "react-redux";

import { RedditPost } from "./RedditPost";

export const RedditPosts = () => {
  //retrieve the state from the reddit slice reducer
  const posts = useSelector((state) => state.reddit.posts);

  return (
    <div>
      <h1>Reddit Posts</h1>
      {posts.map((post) => (
        <RedditPost key={post.id} post={post} />
      ))}
    </div>
  );
};
