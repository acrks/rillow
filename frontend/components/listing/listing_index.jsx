import React from 'react'

import ListingItemContainer from './listing_item'

class ListingIndex extends React.Component {
    componentDidMount() {
        this.props.getListings()
    }

    render() {
        const {listings, createListing} = this.props
        console.log(listings)
        return (
            <div className = "testing">
                {listings.map(listing =>(
                    <ListingItemContainer />
                ))}
            </div>
        )
    }
}

export default ListingIndex