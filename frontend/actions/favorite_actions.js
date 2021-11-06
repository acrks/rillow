import * as FavoriteAPIUtil from '../utils/favorite_api_util'

export const RECEIVE_LISTING_LIKES = 'RECEIVE_LISTING_LIKES'
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const receiveFavoriteIndex = (favoriteIndex) => {
  return {
    type: RECEIVE_LISTING_LIKES,
    favoriteIndex,
  };
};

export const receiveFavorite = (favorite) => {
  return {
    type: RECEIVE_FAVORITE,
    favorite
  }
}

export const removeFavorite = (favoriteId) => {
  return {
    type: REMOVE_FAVORITE,
    favoriteId
  }
} 

export const createFavorite = (favorite) => dispatch => (
  FavoriteAPIUtil.createFavorite(favorite)
  .then(favorite => (
      dispatch(receiveFavorite(favorite))
  ))
);

export const deleteFavorite = (favoriteId) => dispatch => (
  FavoriteAPIUtil.deleteFavorite(favoriteId).then(dispatch
    (removeFavorite(favoriteId)))
);

export const getListingLikes = (listingId) => (dispatch) => {
  return $.ajax({
    url: "/api/favorites/",
    method: "GET",
    data: { listing_id: listingId },
  }).then((likeIndex) => dispatch(receiveFavoriteIndex(likeIndex)));
};

export const getUserIdLikes = (userId) => (dispatch) => {
  return $.ajax({
    url: "/api/favorites/",
    method: "GET",
    data: { favoriter_id: userId},
  }).then((likeIndex) => dispatch(receiveFavoriteIndex(likeIndex)));
};

export const getUserLikes = (userId, listingId) => (dispatch) => {
  return $.ajax({
    url: "/api/favorites/",
    method: "GET",
    data: { favoriter_id: userId, listing_id: listingId },
  }).then((likeIndex) => dispatch(receiveFavoriteIndex(likeIndex)));
};