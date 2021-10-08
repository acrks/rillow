import {connect} from 'react-redux'
import ListingShow from './listing_show'
import { fetchListing, deleteListing } from '../../../actions/listing_actions'
import { getListingLikes } from '../../../actions/favorite_actions'

const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id],
    currentUser: state.session.currentUser,
    favorite: Object.values(state.entities.favorites)
})

const mapDispatchToProps = (dispatch) => ({
    fetchListing: listing => dispatch(fetchListing(listing)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)),
    getListingLikes: listingId => dispatch(getListingLikes(listingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow)