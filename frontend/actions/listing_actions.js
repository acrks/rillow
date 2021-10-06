import * as APIUtil from '../utils/listing_api_util'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";
export const REMOVE_LISTING = 'REMOVE_LISTING';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

export const receiveListingErrors = errors => {
  return ({
    type: RECEIVE_LISTING_ERRORS,
    errors
  });
}

const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId
});

export const fetchListings = () => dispatch => (
  APIUtil.fetchListings()
  .then(payload => (dispatch(receiveListings(payload))
  ))
);

export const fetchListing = listingId => dispatch => (
  APIUtil.fetchListing(listingId)
  .then(listing => dispatch(receiveListing(listing)))
);

export const createListing = listing => dispatch => (
  APIUtil.createListing(listing).then(listing => (
    dispatch(receiveListing(listing))
  ), err => (
    dispatch(receiveListingErrors(err.responseJSON))
  ))
);

export const updateListing = listing => dispatch => (
  APIUtil.updateListing(listing)
  .then(listing => dispatch(receiveListing(listing)))
)

export const deleteListing = listingId => dispatch => (
  APIUtil.deleteListing(listingId)
  .then(() => dispatch(removeListing(listingId)))
)