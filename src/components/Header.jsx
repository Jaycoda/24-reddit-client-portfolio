import React from 'react';
import { useLocation } from 'react-router-dom';

import { SearchBar } from './SearchBar';
import { SubReddits } from './SubReddits';

export const Header = () => {
  const location = useLocation();
  console.log(location.pathname); // Outputs the current path

  // check if the current path contains `/post/` followed by additional characters
  const isDynamicPostPage =
    location.pathname.startsWith('/post/') &&
    location.pathname.split('/post/')[1];

  return (
    <div className='header'>
      <div className='logo'>Reddity</div>

      <SubReddits />
      {!isDynamicPostPage && <SearchBar />}
    </div>
  );
};
