import React from 'react';

export const SubReddit = (props) => {
  return (
    <div className='subreddit'>
      <button
        onClick={() => props.handleSubRedditClick(props.subreddit.display_name)}
        key={props.subreddit.id}>
        {props.subreddit.display_name}
      </button>
    </div>
  );
};
