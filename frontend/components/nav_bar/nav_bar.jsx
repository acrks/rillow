import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  return (
    <div className = "nav-bar">
      <Link to="/listings" className = "nav-bar-link">Buy</Link>
      <Link to = "/listings" className = "nav-bar-link">Rent</Link>
      <Link to = "/listings/create" className = "nav-bar-link">Sell</Link>
      <a target="_blank" href="https://www.linkedin.com/in/alex-crooks/" className = "nav-bar-link">Give a cash offer</a>
      <a target="_blank" href="https://account.venmo.com/u/acrks" className = "nav-bar-link">Home Loans</a>
      <Link to = "/" className="logo">Rillow</Link>
      <a target="_blank" href="https://www.fbi.gov/" className = "nav-bar-link">Agent finder</a>
      <Link to = "/" className = "nav-bar-link">Manage Rentals</Link>
      <a target="_blank" href="https://alexcrooks.net/" className = "nav-bar-link">Advertise</a>
      <Link to = "/user/favorites" className = "nav-bar-link">Saved homes</Link>
      <a target="_blank" href="https://stackoverflow.com/" className = "nav-bar-link">Help</a>
      {currentUser ? <button onClick = {logout} className = "session-button">Log Out</button> : 
      <button onClick={() => openModal('login')} className = "session-button">Login</button>} 
    </div>
  );
};
