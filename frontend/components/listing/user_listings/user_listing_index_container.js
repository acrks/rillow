import {connect} from 'react-redux'
import UserListingIndex from './user_listing_index'
import { fetchUserListings, clearListings } from '../../../actions/listing_actions'

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = (dispatch) => ({
    getUserListings: (userId) => dispatch(fetchUserListings(userId)),
    clearListings: () => dispatch(clearListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListingIndex)