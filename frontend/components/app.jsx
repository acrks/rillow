import React from 'react';
import ListingIndexContainer from './listing/listing_index_container'
import HomeContainer from './home/home_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import FooterContainer from './footer/footer_container'
import Modal from './modal/modal'
import EditListingFormContainer from './listing/listing_form/edit_listing_form_container';
import ListingFormContainer from './listing/listing_form/listing_form_container'
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
      {/* <Route exact path="/user" component = {UserProfileContainer} /> */}
      {/* <Route exact path="/user/favorites" component = {UserProfileContainer} /> */}
      <ProtectedRoute exact path="/listings/create" component={ListingFormContainer} />
      <ProtectedRoute exact path="/listings/:id/edit" component={EditListingFormContainer} />
      <ProtectedRoute exact path="/listings/:id" component={ListingShowContainer} />
      <ProtectedRoute exact path="/listings" component={ListingIndexContainer} />
      <Route render={() => <Redirect to={{pathname: "/"}} />} />    
    </Switch>
    <footer>
      <FooterContainer />
    </footer>
  </div>
);
