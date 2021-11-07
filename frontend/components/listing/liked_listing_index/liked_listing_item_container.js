import { connect } from "react-redux";
import likedListingItem from "./liked_listing_item";
import { fetchListing } from "../../../actions/listing_actions";

const mapStateToProps = (state) => ({
    listing: Object.values(state.entities.listings),
})

const mapDispatchToProps = (dispatch) => ({
    fetchListing: listing => dispatch(fetchListing(listing))
})

export default connect(mapStateToProps, mapDispatchToProps)(likedListingItem)