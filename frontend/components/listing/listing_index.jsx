import React from 'react'

import ListingItem from './listing_item'

class ListingIndex extends React.Component {
    
    componentDidMount() {
        this.props.getListings()
    }

    render() {
        const { listings, createListing} = this.props
        console.log(listings)
        return (
            <div className = "listing_index">
                {listings.map(listing =>( <ListingItem key = {listing.id} listing = {listing}/> ))}
                {/* {listings.map(listing =>(
                    <ListingItem key = {listing.id} createListing = {createListing} listing = {listing}/>
                ))} */}
            </div>
        )
    }
}

export default ListingIndex