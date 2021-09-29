import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING
} from '../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      const newListing = { [action.listing.id]: action.listing };
      return merge({}, state, newListing);
    case REMOVE_LISTING:
      delete nextState[action.listingId]
      return nextState
    default:
      return state;
  }
};

export default listingsReducer;