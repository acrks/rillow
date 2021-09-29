import React from 'react';

export default ({currentUser}) => (
  <div className = "home_page">
    {/* <img src={window.mainBgURL} className = "main-bg-image"/> */}
    <h1 className = "home_page_text">
    {currentUser ? `I'll be frank ${currentUser.email}, i` : 'I'}
    f I had any imagination, there'd be something clever and witty here. Alas :(
    </h1>
  </div>
)