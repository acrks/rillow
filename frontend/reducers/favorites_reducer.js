import { RECEIVE_LISTING_LIKES } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state); //NB: refactor later
  switch (action.type) {
    case RECEIVE_LISTING_LIKES:
      nextState = action.favoriteIndex;
      return nextState;
    default:
      return state;
  }
};

export default favoritesReducer;