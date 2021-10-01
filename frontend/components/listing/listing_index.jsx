import React from 'react'

import ListingItem from './listing_item'

class ListingIndex extends React.Component {
    componentDidMount() {
        this.props.getListings()
    }

    render() {
        const {listings, createListing} = this.props
        console.log("The listings: " + listings)
        return (
            <div className = "list_index">
                <ul>
                {listings.map(listing =>(
                    <ListingItem key = {listing.id} createListing = {createListing} listing = {listing}/>
                ))}
                </ul>
            </div>
        )
    }
}

export default ListingIndex