import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

class ModalTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidMount() {
    this.props.openModal('login');
  }
  render() { 
    return (  
      <div>
        <Redirect to="/" />
      </div>
    );
  }
}

const mapTrigger = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
})

const ModalTriggerContainer = connect(null, mapTrigger)(ModalTrigger);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

const Protected = ({loggedIn, path, component: Component}) => { 
  return(
    <Route 
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <ModalTriggerContainer />
    )}
  />
  )
};

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));