import React from 'react';
import { connect } from 'react-redux';
import ListingForm from './listing_form';
import {fetchListing, updateListing} from '../../../actions/listing_actions'

class EditListingForm extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.id)
  }

  render() {
    const { action, formType, listing, currentUser, errors } = this.props;

    if (!listing) return null;
    return (
      <ListingForm
        action={action}
        formType={formType}
        listing={listing}
        currentUser={currentUser}
        errors={errors} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.id],
  formType: 'Update Listing',
  currentUser: state.session.currentUser,
  errors: state.errors.listing
})

const mapDispatchToProps = (dispatch) => ({
  action: listing => dispatch(updateListing(listing)),
  fetchListing: listing => dispatch(fetchListing(listing))  
})

export default connect(mapStateToProps, mapDispatchToProps)(EditListingForm)
