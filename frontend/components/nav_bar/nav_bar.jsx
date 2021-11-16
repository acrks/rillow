import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  let message = ""
  if(currentUser) {
    message = 'Welcome back!'
    if(currentUser.first_name) {
      message = `Welcome back ${currentUser.first_name}!`
    }
  }
  
  return (
    <div className = "nav-bar">
      {/* <Link to={{pathname: "/listings", filterTerm: 'buy'}} className = "nav-bar-link">Buy</Link> */}
      <span className = "nav-bar-link">{message}</span>
      <Link to = "/listings" className = "nav-bar-link">All Listings</Link>
      {/* <Link to = {{pathname: "/listings", filterTerm: 'rent'}} className = "nav-bar-link">Rent</Link> */}
      <Link to = "/listings/create" className = "nav-bar-link">Sell</Link>
      <a target="_blank" href="https://www.linkedin.com/in/alex-crooks/" className = "nav-bar-link">LinkedIn</a>
      <Link to = "/" className="logo"></Link>
      <a target="_blank" href="https://angel.co/u/alex-crooks" className = "nav-bar-link">AngelList</a>
      <a target="_blank" href="https://alexcrooks.net/" className = "nav-bar-link">Portfolio</a>
      {currentUser ? 
      <><Link to = "/favorites" className = "nav-bar-link">Saved Listings</Link>
      <Link to = "/user/listings" className = "nav-bar-link">My Listings</Link>
      <button onClick = {logout} className = "session-button">Log Out</button></> : 
      <button onClick={() => openModal('login')} className = "session-button">Login</button>} 
    </div>
  );
};
