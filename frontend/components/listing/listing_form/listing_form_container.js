import {connect} from 'react-redux'
import { openModal } from '../../../actions/modal_actions';
import { createListing } from '../../../actions/listing_actions';
import ListingForm from './listing_form'

const mapStateToProps = (state) => ({
    listing: {
        street_name: '',
        street_number: '',
        city_name: '',
        state: '',
        zipcode: '',
        unit_number: '',
        creator_id: state.session.currentUser.id,
        price: '',
        num_bathrooms: 1,
        num_bedrooms: 1,
        sqft: '',
        longitude: 0,
        latitude: 0,
        picture: '',
        purchase: true,
        unit_number: '',
    },
    formType: 'Create Listing',
    currentUser: state.session.currentUser,
    errors: Object.values(state.errors.listing)
})

const mapDispatchToProps = (dispatch) => ({
    action: listing => dispatch(createListing(listing)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm)