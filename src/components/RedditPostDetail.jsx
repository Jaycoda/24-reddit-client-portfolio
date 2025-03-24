import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useParams, useLocation } from 'react-router-dom';

export const RedditPostDetail = (props) => {
  const location = useLocation();
  const { detailPost } = location.state || {}; // Safely access detailPost

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <div className='main'>
      <button className='back-button' onClick={handleBackClick}>
        Go Back
      </button>
      {detailPost ? (
        <>
          <h2 className='post'>{detailPost?.title}</h2>
          {detailPost.url_overridden_by_dest?.includes('jpeg') ||
          detailPost.url_overridden_by_dest?.includes('png') ? (
            <img
              src={detailPost.url_overridden_by_dest}
              alt={detailPost?.title || 'No Title'}
            />
          ) : (
            <p>Image not available</p>
          )}
        </>
      ) : (
        <p>Post not found or loading...</p>
      )}
    </div>
  );
};
