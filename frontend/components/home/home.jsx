import React from 'react';
import { Link } from 'react-router-dom';

import SearchBarContainer from '../search_bar/search_bar_container';

export default ({currentUser}) => (
  <div>
  <div className = "home_page">
    <SearchBarContainer />
  </div>
    <div className = "options-links">
      <Link to = "/listings">See All Listings</Link>
      {currentUser ? 
      <Link to = "/listings/create">Create A Listing</Link> : null}
      </div>
  </div>
)