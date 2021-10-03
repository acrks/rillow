import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  return (
    <div className = "nav-bar">
    <Link to="/listings" className = "nav_bar_link">Buy</Link>
    <Link to = "/listings" className = "nav-bar-link">Rent</Link>
    <Link to = "/listings/create" className = "nav-bar-link">Sell</Link>
    <Link to = "/https://www.linkedin.com/in/alex-crooks/" className = "nav-bar-link">Get a cash offer</Link>
    <Link to = "/https://account.venmo.com/u/acrks" className = "nav-bar-link">Home Loans</Link>
    <Link to = "/" className="logo">Rillow</Link>
    <Link to = "/https://www.fbi.gov/" className = "nav-bar-link">Agent Finder</Link>
    <Link to = "/" className = "nav-bar-link">Manage Rentals</Link>
    <Link to = "/https://alexcrooks.net/" className = "nav-bar-link">Advertise</Link>
    <Link to = "/https://stackoverflow.com/" className = "nav-bar-link">Help</Link>
    {currentUser ? <button onClick = {logout}>Log Out</button> : 
    <><button onClick={() => openModal('signup')}>Sign up</button>
    <button onClick={() => openModal('login')}>Login</button></>} 
  </div>
  );
};
