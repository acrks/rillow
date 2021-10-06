import React from 'react'
import CreateListingForm from './listing_form/listing_form_container'
import ListingItem from './listing_item'
import { Link } from "react-router-dom";

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)

        this.routeChangeCreate = this.routeChangeCreate.bind(this)
    }

    componentDidMount() {
        this.props.getListings()
        window.scrollTo(0, 0)
    }

    routeChangeCreate() {
        let path = `/listings/create`;
        this.props.history.push(path);
    }

    render() {
        const { listings, updateListing} = this.props
        console.log(listings)
        return (
            <div className = "listing-index-container">
                <div className = "index-map">
                    Map will go here
                </div>
                <div className = "index-listings">
                <ul className = "listing-index">
                    {listings.map(listing =>( 
                    <ListingItem 
                    key = {listing.id} 
                    listing = {listing} 
                    updateListing = {updateListing} 
                    />
                    ))}
                </ul>
                <button onClick = {this.routeChangeCreate} >Create A Listing</button>
                </div>
            </div>
        )
    }
}

export default ListingIndex