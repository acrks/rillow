import {connect} from 'react-redux'
import ListingShow from './listing_show'
import { fetchListing } from '../../../actions/listing_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        listing: state.entities.listings[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchListing: listing => dispatch(fetchListing(listing)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow)