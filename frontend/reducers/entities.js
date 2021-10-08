import { combineReducers } from 'redux';
import listingsReducer from './listings_reducer';
import favoritesReducer from './favorites_reducer';

export default combineReducers({
  listings: listingsReducer,
  favorites: favoritesReducer
});