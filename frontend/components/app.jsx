import React from 'react';
// import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
// import ChirpIndexContainer from './chirps/chirp_index_container';
import SignUpContainer from './signup/signup_container';
import LoginFormContainer from './login/login_container'
import Home from './home/home';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Route, Redirect, Switch } from 'react-router-dom';

export default () => (
  <div className = "body">
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={Home} />
    
    <Switch>
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
      <Route render={() => <Redirect to={{pathname: "/"}} />} />
    </Switch>
    
  </div>
);
