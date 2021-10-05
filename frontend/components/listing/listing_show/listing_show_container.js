import {connect} from 'react-redux'
import ListingShow from './listing_show'
import { fetchListing, deleteListing } from '../../../actions/listing_actions'

const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id],
    currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    fetchListing: listing => dispatch(fetchListing(listing)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)).then()
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow)