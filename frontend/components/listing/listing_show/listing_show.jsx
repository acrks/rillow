import React from 'react'
import EditListingFormContainer from '../listing_form/edit_listing_form_container'
import { deleteListing } from '../../../actions/listing_actions'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)

        this.routeChangeEdit = this.routeChangeEdit.bind(this)
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.id)
    }
    
    routeChangeEdit() {
        let path = `/listings/${this.props.listing.id}/edit`;
        this.props.history.push(path);
    }

    render() {
        if(!this.props.listing) {
            return null
        }
        const {listing} = this.props
        return(
            <div className = "listing-show">
                <div className = "listing-show-page-pictures">
                    Pictures will go here
                </div>
                <div className = "listing-show-page-info">
                    <div className = "listing-show-page-banner">
                        <span className = "listing-show-page-logo logo">Rillow</span>
                        <div className = "save-share-more">Save, Share will go here</div>
                    </div>
                
                    <span className = "listing-show-page-price">${listing.price} {listing.purchase ? null : 'per month' }</span>
                    
                    <span className = "listing-show-page-sizes">{listing.num_bedrooms} | {listing.num_bathrooms} | {listing.sqft} sqft</span>
                    {/* <h3>Agent: {listing.creator.email}</h3> */}

                    <p className = "index-item-address">{listing.street_number} {listing.street_name}, {listing.city_name}, {listing.state}, {listing.zipcode}
                    </p>

                    {this.props.currentUser ?
                    <>
                    <div className = "listing-show-outreach">
                        <button>Contact Agent</button>
                        <button>Schedule tour here</button>
                    </div>
                    <>{this.props.currentUser.email === listing.creator.email ? 
                    <>
                    <br/>
                    <button onClick={this.routeChangeEdit}>Edit Listing</button>
                    <br/>
                    <button onClick={() => deleteListing(listing.id)}>Delete Listing</button>
                    </> : null} 
                    </>
                    </> : `Please sign in to schedule a tour or make changes to the listing`}
                </div>
            </div>
        )
    }
}

export default ListingShow