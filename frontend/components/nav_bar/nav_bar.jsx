import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  return (
    <div className = "nav-bar">
      <Link to="/listings" className = "nav-bar-link">Buy</Link>
      <Link to = "/listings" className = "nav-bar-link">Rent</Link>
      <Link to = "/listings/create" className = "nav-bar-link">Sell</Link>
      <a target="_blank" href="https://www.linkedin.com/in/alex-crooks/" className = "nav-bar-link">LinkedIn</a>
      <a target="_blank" href="https://account.venmo.com/u/acrks" className = "nav-bar-link">Home Loans</a>
      <Link to = "/" className="logo"></Link>
      <Link to = "/" className = "nav-bar-link">Manage Rentals</Link>
      <a target="_blank" href="https://alexcrooks.net/" className = "nav-bar-link">Portfolio</a>
      {currentUser ? 
      <><Link to = "/favorites" className = "nav-bar-link">Saved Listings</Link>
      <Link to = "/user/listings" className = "nav-bar-link">My Listings</Link>
      <button onClick = {logout} className = "session-button">Log Out</button></> : 
      <button onClick={() => openModal('login')} className = "session-button">Login</button>} 
    </div>
  );
};
