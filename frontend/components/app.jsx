import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
// import ChirpIndexContainer from './chirps/chirp_index_container';
import HomeContainer from './home/home_container';
import Modal from './modal/modal';
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
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
      <Route render={() => <Redirect to={{pathname: "/"}} />} />
    </Switch>
    
  </div>
);
