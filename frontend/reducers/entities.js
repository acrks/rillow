import { combineReducers } from 'redux';
import listingsReducer from './listings_reducer';

export default combineReducers({
  listings: listingsReducer
});