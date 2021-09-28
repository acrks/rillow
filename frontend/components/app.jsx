import React from 'react';
// import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
// import ChirpIndexContainer from './chirps/chirp_index_container';
import SignUpContainer from './signup/signup_container';
import LoginFormContainer from './login/login_container'
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Route } from 'react-router-dom';

export default () => (
  <div className = "body">
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    {/* Will be replaced with listings index */}
    {/* <ProtectedRoute path="/listings" component={ListingIndexContainer} /> */}
    <AuthRoute path="/signup" component={SignUpContainer}/>
    <AuthRoute path="/login" component={LoginFormContainer}/>
  </div>
);
