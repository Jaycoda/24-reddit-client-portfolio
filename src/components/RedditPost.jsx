import React from "react";
import { convertUTCToDate } from "../utils/dateFormat";
import { pastTimeFormat } from "../utils/pastTimeFormat";

export const RedditPost = (props) => {
  //destructure the post object from the props
  const { post } = props;
  return (
    <div className="post" key={post.id}>
      <h2>{post.link_title}</h2>
      <p>{post.body}</p>
      <p>posted by: {post.author}</p>
      <p>upvotes: {post.ups}</p>
      <p>comments: {post.num_comments}</p>
      <p>created: {pastTimeFormat(post.created_utc)}</p>
    </div>
  );
};
