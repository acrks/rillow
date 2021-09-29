import React from 'react';

import SearchBarContainer from '../search_bar/search_bar_container';

export default ({currentUser}) => (
  <div className = "home_page">
    {/* <h1 className = "home_page_text">
    {currentUser ? `I'll be frank ${currentUser.email}, i` : 'I'}
    f I had any imagination, there'd be something clever and witty here. Alas :(
    </h1> */}
    <SearchBarContainer />
  </div>
)