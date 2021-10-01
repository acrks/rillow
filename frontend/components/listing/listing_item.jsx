import React from 'react'
import { Link } from 'react-router-dom'

const PostIndexItem = ({listing}) => (
    <Link to = {`/listings/${listing.id}`}>
    <li className = "listing-index-item" >
        <h3>{listing.purchase ? null : 'Leasing ' }
            Agent: {listing.creator.email}</h3>
            <h3>${listing.price} {listing.purchase ? null : 'per month' }</h3>
            <p className = "index-item-address">{listing.street_number} {listing.street_name}
            <br/>
            {listing.city_name}, {listing.zipcode}
            </p>
    </li>
    </Link>
)

export default PostIndexItem
