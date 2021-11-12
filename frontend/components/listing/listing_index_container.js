import { connect } from 'react-redux'
import ListingIndex from './listing_index'
import { asArray } from '../../reducers/selector';
import { fetchListings, updateListing, createListing, clearListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings),
    
    // searchTerm: this.props.location.searchTerm
})

const mapDispatchToProps = dispatch => ({
    getListings: listings => dispatch(fetchListings(listings)),
    createListing: listing => dispatch(createListing(listing)),
    updateListing: listing => dispatch(updateListing(listing)),
    // deleteListing: () => dispatch(deleteListing(listingId))
    clearListings: () => dispatch(clearListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex)