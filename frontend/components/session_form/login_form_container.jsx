import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    type: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button className = "subheader tab-header change-modal-tab" onClick={() => dispatch(openModal('signup'))}>
        New Account
      </button>
    ),
    login: formUser => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
