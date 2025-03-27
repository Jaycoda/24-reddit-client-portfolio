import { subreddits } from '../data/subreddits';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRedditData, setQuery } from '../store/redditSlice';
import { useLocation, useNavigate } from 'react-router-dom';

import React from 'react';
import { SubReddit } from './SubReddit';

export const SubReddits = () => {
  const query = useSelector((state) => state.reddit.query);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubRedditClick = (category) => {
    // Only navigate when not already at root
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to root if necessary
    }

    // Set the search query to the null when a subreddit is clicked
    if (query !== null) {
      dispatch(setQuery(null));
    }

    dispatch(fetchRedditData(category));
  };

  return (
    <div className='subreddits'>
      {subreddits.map((subreddit) => (
        <SubReddit
          key={subreddit.id}
          subreddit={subreddit}
          handleSubRedditClick={handleSubRedditClick}
        />
      ))}
    </div>
  );
};
