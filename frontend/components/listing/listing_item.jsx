import React from 'react'

// export default ({listing, createListing}) => (
    
//     <div className = "listing_index_item">
//         {/* <h3>{listing.purchase ? null : 'Leasing' }
//         Agent: {listing.creator}</h3>
//         <p className = "index-item-address">{listing.street_number}, {listing.street_name}
//         <br/>
//         {listing.city_name}, {listing.zipcode}
//         </p> */}
        
//     </div>
// )

const PostIndexItem = ({listing}) => (
    <li className = "listing-index-item">
        <h3>{listing.purchase ? null : 'Leasing ' }
            Agent: {listing.creator.email}</h3>
            <h3>${listing.price} {listing.purchase ? null : 'per month' }</h3>
            <p className = "index-item-address">{listing.street_number} {listing.street_name}
            <br/>
            {listing.city_name}, {listing.zipcode}
            </p>
    </li>
)

export default PostIndexItem
