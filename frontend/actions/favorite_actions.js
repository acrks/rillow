export const RECEIVE_LISTING_LIKES = 'RECEIVE_LISTING_LIKES'

export const receiveFavoriteIndex = (favoriteIndex) => {
  return {
    type: RECEIVE_LISTING_LIKES,
    favoriteIndex,
  };
};

export const createFavorite = (favorite) => (dispatch) => {
  return $.ajax({
    method: "POST",
    url: "/api/user/favorites",
    data: { favorite },
  }).then((favorites) => dispatch(receiveFavoriteIndex(favorites)));
};

export const deleteFavorite = (favorite) => (dispatch) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/user/favorites/${favorite.id}`
  }).then((favoriteIndex) => dispatch(receiveFavoriteIndex(favoriteIndex)));
};

export const getListingLikes = (listingId) => (dispatch) => {
  return $.ajax({
    url: "/api/favorites/",
    method: "GET",
    data: { listing_id: listingId },
  }).then((likeIndex) => dispatch(receiveFavoriteIndex(likeIndex)));
};