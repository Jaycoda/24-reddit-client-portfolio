import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRedditData } from "../store/redditSlice";

export const RedditPostDetail = () => {
  const { postId } = useParams();

  const post = useSelector((state) =>
    state.reddit.posts.find((post) => post.id === postId)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRedditData(post.subreddit));
  }, [dispatch]);

  console.log(post?.title);

  return (
    <div className="main">
      <h2 className="post">{post?.title}</h2>
    </div>
  );
};
