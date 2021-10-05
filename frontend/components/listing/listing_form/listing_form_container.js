import {connect} from 'react-redux'
import { openModal } from '../../../actions/modal_actions';
import { createListing } from '../../../actions/listing_actions';
import ListingForm from './listing_form'

const mapStateToProps = (state) => ({
    listing: {
        creator_id: state.session.currentUser.id,
        purchase: "true",
        price: 0,
        sqft: 0,
        num_bedrooms: 1,
        num_bathrooms: 1,
        street_number: "",
        street_name: '',
        city_name: '',
        state: '',
        zipcode: '',
    },
    formType: 'Create Listing',
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    action: listing => dispatch(createListing(listing)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm)