import { connect } from 'react-redux';
import React from 'react';
import { createsNewUser, login, clearErrors } from '../../actions/session'
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(createsNewUser(user)),
    otherForm: (
      <button className = "subheader tab-header change-modal-tab" onClick={() => dispatch(openModal('login'))}>
        Sign in
      </button>
    ),
    login: formUser => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
