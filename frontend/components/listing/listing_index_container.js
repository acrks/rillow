import { connect } from 'react-redux'
import ListingIndex from './listing_index'
import { asArray } from '../../reducers/selector';
import { fetchListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({
    listings: asArray(state.entities)
})

const mapDispatchToProps = dispatch => ({
    createListing: listing => dispatch(createListing(listing)),
    getListings: () => dispatch(fetchListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex)