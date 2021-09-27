import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick = {logout}>Log Out</button>
    </div>
  )
  : (
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
      <Link to="/signup" className = "nav-bar-link">Sign in</Link>
    </div>
  );

  return (
    <header className="nav-bar">
        {display}
    </header>
  );
};
