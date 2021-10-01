import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING
} from '../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return {...state, ...action.listings}
    case RECEIVE_LISTING:
      nextState[action.listing.id] = action.listing
      return nextState
    case REMOVE_LISTING:
      delete nextState[action.listingId]
      return nextState
    default:
      return state;
  }
};

export default listingsReducer;