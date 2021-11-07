import {connect} from 'react-redux'
import LikedListingIndex from './liked_listing_index'
import { fetchListings } from "../../../actions/listing_actions"
import { getUserLikes } from '../../../actions/favorite_actions'

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    favorites: Object.values(state.entities.favorites),
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = (dispatch) => ({
    fetchListings: listing => (dispatch(fetchListings(listing))),
    getUserLikes: (userId) => dispatch(getUserLikes(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LikedListingIndex)