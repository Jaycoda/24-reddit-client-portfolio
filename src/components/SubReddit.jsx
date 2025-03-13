import React from "react";

export const SubReddit = (props) => {
  return (
    <div className="subreddit">
      <a key={props.subreddit.id} href={props.subreddit.url}>
        {props.subreddit.display_name}
      </a>
    </div>
  );
};
