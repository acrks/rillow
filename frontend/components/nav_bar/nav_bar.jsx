import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = (
    <div>
      <Link to="/" className = "nav-bar-link">Buy</Link>
      <Link to = "/" className = "nav-bar-link">Rent</Link>
      <Link to = "/" className = "nav-bar-link">Sell</Link>
      <Link to = "/" className = "nav-bar-link">Get a cash offer</Link>
      <Link to = "/" className = "nav-bar-link">Home Loans</Link>
      <Link to = "/" className="logo">Rillow</Link>
      <Link to = "/" className = "nav-bar-link">Agent Finder</Link>
      <Link to = "/" className = "nav-bar-link">Manage Rentals</Link>
      <Link to = "/" className = "nav-bar-link">Advertise</Link>
      <Link to = "/" className = "nav-bar-link">Help</Link>
      {currentUser ? <button onClick = {logout}>Log Out</button> : 
      <><Link to="/signup" className = "nav-bar-link">Sign up</Link>
      <Link to="/login" className = "nav-bar-link">Log In</Link></>} 
    </div>
  );

  return (
    <header className="nav-bar">
        {display}
    </header>
  );
};
