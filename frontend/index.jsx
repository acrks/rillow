import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import { receiveCurrentUser } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore()
    let preloadedState = undefined;
    if(window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }
    window.store = store
    window.receiveCurrentUser = receiveCurrentUser
    ReactDOM.render(<Root store = {store}/>, root)
})