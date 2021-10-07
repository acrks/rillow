import React from 'react'
// import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        const listingId = this.props.listing.id;
        this.props.history.push(`/listings/${listingId}`);
    }

render() {
    const {listing} = this.props
    return(
    <li className = "listing-index-item" onClick = {this.handleClick}>
            <img className = "listing-index-item-thumbnail" src = {listing.image_url} alt = "index_item_thumbnail"></img>
            <div className = "listing-index-item-info">
            <h3>${listing.price} {listing.purchase ? null : 'per month' }</h3>
            <p>{listing.num_bedrooms} bd | {listing.num_bathrooms} ba | {listing.sqft} sqft</p>
            <p className = "index-item-address">{listing.street_number} {listing.street_name}
            <br/>
            {listing.city_name}, {listing.state}, {listing.zipcode}
            </p>
            </div>
    </li>
        )
    }
}

export default withRouter(ListingIndexItem)
