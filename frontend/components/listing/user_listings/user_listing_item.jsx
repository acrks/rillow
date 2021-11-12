import React from 'react'
import {withRouter} from 'react-router-dom'


class userListingItem extends React.Component {
    constructor(props) {
        super(props)
        this.directToPage = this.directToPage.bind(this)
    }

    directToPage(e) {
        e.preventDefault()
        let path = `/listings/${this.props.listing.id}`;
        this.props.history.push(path);
    }
    
    render(){
        if(!this.props.listing) {
            return null
        }
        const { listing } = this.props
        return (
            <div className = "liked-listing-item" onClick = {this.directToPage}>
                <div className = "liked-listing-item-thumbnail" style = {{backgroundImage : `url(${listing.image_url})`}} />
                <div className = "liked-listing-item-info">
                <span className = "listing-index-item-price">${listing.price.toLocaleString()} {listing.purchase ? null : `per month`}</span>
                {listing.num_bedrooms} bds   {listing.num_bathrooms} ba   {listing.sqft} sqft<br/>
                <span className = "liked-listing-item-address">{listing.street_number} {listing.street_name},{listing.unit_number ? ` Unit ${listing.unit_number},`: null} {listing.city_name}, {listing.state} {listing.zipcode}</span>
                </div>
            </div>
        )
    }
}

export default withRouter(userListingItem)