import { postUser, postSession, deleteSession } from "../utils/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

export const createsNewUser = user => dispatch => (
    postUser(user).then(user => (
        dispatch(receiveCurrentUser(user))
      ), err => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const login = user => dispatch => (
    postSession(user).then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );

export const logout = () => dispatch => deleteSession().then(() => dispatch(logoutCurrentUser()))

