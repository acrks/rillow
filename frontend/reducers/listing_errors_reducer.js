import { 
    RECEIVE_LISTING_ERRORS,
    RECEIVE_LISTING } from '../actions/listing_actions';
  
    const ListingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_LISTING_ERRORS:
        return action.errors || []; //NB: added || result of clearErrors() in video_form submitting no arguments
      case RECEIVE_LISTING:
        return [];
        default:
        return state;
    }
  };
  
  export default ListingErrorsReducer;