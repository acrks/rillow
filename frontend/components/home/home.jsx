import React from 'react';
import { Link } from 'react-router-dom';
import Options from '../options/options';

import SearchBarContainer from '../search_bar/search_bar_container';

export default ({currentUser}) => (
  <div>
  <div className = "home-page">
    <SearchBarContainer />
  </div>
  <span className = "headline home-subheadline">Whether you’re buying, selling or renting,<br/>we can help you move forward.</span>
      <Options />
  </div>
)