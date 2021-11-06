import {connect} from 'react-redux'
import ListingShow from './listing_show'
import { fetchListing, deleteListing } from '../../../actions/listing_actions'
import { getListingLikes, getUserLikes, createFavorite, deleteFavorite } from '../../../actions/favorite_actions'


const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id],
    currentUser: state.session.currentUser,
    favorite: state.entities.favorites
})

const mapDispatchToProps = (dispatch) => ({
    fetchListing: listing => dispatch(fetchListing(listing)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)),
    getListingLikes: listingId => dispatch(getListingLikes(listingId)),
    getUserLikes: (userId, listingId) => dispatch(getUserLikes(userId, listingId)),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow)