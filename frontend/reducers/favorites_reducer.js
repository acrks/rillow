import { RECEIVE_LISTING_LIKES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state); //NB: refactor later
  switch (action.type) {
    case RECEIVE_LISTING_LIKES:
      nextState = action.favoriteIndex;
      return nextState;
    case RECEIVE_FAVORITE:
      nextState = action.favorite
      return nextState
    case REMOVE_FAVORITE:
      delete nextState[action.favoriteId]
      return nextState
    default:
      return state;
  }
};

export default favoritesReducer;