import { connect } from 'react-redux'
import ListingIndex from './listing_index'
import { asArray } from '../../reducers/selector';
import { fetchListings, updateListing, createListing } from '../../actions/listing_actions';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = dispatch => ({
    getListings: listings => dispatch(fetchListings(listings)),
    createListing: listing => dispatch(createListing(listing)),
    updateListing: listing => dispatch(updateListing(listing))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex)