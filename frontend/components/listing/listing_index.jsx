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
    }

    routeChangeCreate() {
        let path = `/listings/create`;
        this.props.history.push(path);
    }

    render() {
        const { listings, updateListing} = this.props
        console.log(listings)
        return (
            <div>
                <ul className = "listing_index">
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
        )
    }
}

export default ListingIndex