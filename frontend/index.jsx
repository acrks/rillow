import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import { receiveCurrentUser } from './actions/session_actions';
import { createStore } from 'redux';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    let preloadedState = undefined;
    if(window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }
    const store = configureStore(preloadedState)
    window.store = store
    window.receiveCurrentUser = receiveCurrentUser
    ReactDOM.render(<Root store = {store}/>, root)
})