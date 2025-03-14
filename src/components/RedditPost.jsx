import React from "react";
import { convertUTCToDate } from "../utils/dateFormat";
import { pastTimeFormat } from "../utils/pastTimeFormat";

export const RedditPost = (props) => {
  //destructure the post object from the props
  const { post } = props;

  return (
    <div className="post" key={post.id}>
      <h2>{post.title}</h2>
      {post.url_overridden_by_dest.includes("jpeg") ? (
        <img src={post.url_overridden_by_dest} alt={post.title} />
      ) : (
        <p>Image not available</p>
      )}

      <p>subreddit: {post.subreddit}</p>
      <p>posted by: {post.author}</p>
      <p>upvotes: {post.ups}</p>
      <p>comments: {post.num_comments}</p>
      <p>created: {pastTimeFormat(post.created_utc)}</p>
    </div>
  );
};
