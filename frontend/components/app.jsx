import React from 'react';
import ListingIndexContainer from './listing/listing_index_container'
import HomeContainer from './home/home_container';
import NavBarContainer from './nav_bar/nav_bar_container';
// import ChirpIndexContainer from './chirps/chirp_index_container';
import Modal from './modal/modal';
import SignupContainer from './signup/signup_container'
import ListingFormContainer from './listing/listing_form_container'
import ListingShowContainer from './listing/listing_show/listing_show_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Route, Redirect, Switch } from 'react-router-dom';

export default () => (
  
  <div className = "body">
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/listings/create" component={ListingFormContainer} />
      <Route path="/listings/:id" component={ListingShowContainer} />
      <Route path="/listings" component={ListingIndexContainer} />
      <Route render={() => <Redirect to={{pathname: "/"}} />} />    
    </Switch>
    
  </div>
);
