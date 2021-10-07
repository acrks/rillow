export const RECEIVE_VIDEO_LIKES = "RECEIVE_VIDEO_LIKES";

export const receiveLikeIndex = (likeIndex) => {
  return {
    type: RECEIVE_VIDEO_LIKES,
    likeIndex,
  };
};

export const createFavorite = (favorite) => (dispatch) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like },
  }).then((likeIndex) => dispatch(receiveLikeIndex(likeIndex)));
};

export const updateLike = (like) => (dispatch) => {
  return $.ajax({
    method: "PUT",
    url: `/api/likes/${like.id}`,
    data: { like },
  }).then((likeIndex) => dispatch(receiveLikeIndex(likeIndex)));
};

export const deleteLike = (like) => (dispatch) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${like.id}`,
    data: { like },
  }).then((likeIndex) => dispatch(receiveLikeIndex(likeIndex)));
};

export const getVideoLikes = (videoId) => (dispatch) => {
  return $.ajax({
    url: "/api/likes",
    method: "GET",
    data: { video_id: videoId },
  }).then((likeIndex) => dispatch(receiveLikeIndex(likeIndex)));
};