import {connect} from 'react-redux'
import { openModal } from '../../actions/modal_actions';
import ListingForm from './listing_form'

const mapStateToProps = (state) => ({
    listing: {
        creator: state.session.currentUser,
        purchase: 0,
        price: 0,
        num_bedrooms: 0,
        num_bathrooms: 0,
        street_number: '',
        street_name: '',
        city_name: '',
        state: '',
        zipcode: 0,
    },
    formType: 'Create Listing',
    currentUser: state.session.currentUser

})

const mapDispatchToProps = (dispatch) => ({
    action: listing => dispatch(createListing(listing)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm)