import {connect} from 'react-redux'
import LikedListingIndex from './liked_listing_index'
import { fetchListing } from "../../../actions/listing_actions"
import { getUserLikes } from '../../../actions/favorite_actions'

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    favorites: Object.values(state.entities.favorites)
})

const mapDispatchToProps = (dispatch) => ({
    fetchListing: listing => (dispatch(fetchListing(listing))),
    getUserLikes: (userId) => dispatch(getUserLikes(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LikedListingIndex)