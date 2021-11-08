import React from 'react'
import CreateListingForm from './listing_form/listing_form_container'
import ListingItem from './listing_item'
import { Link } from "react-router-dom";
import MapContainer from '../map/map'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)

        this.routeChangeCreate = this.routeChangeCreate.bind(this)
    }

    componentDidMount() {
        this.props.getListings()
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        // this.props.removeListings
    }

    routeChangeCreate() {
        let path = `/listings/create`;
        this.props.history.push(path);

    }

    render() {
        const { listings, updateListing} = this.props
        // console.log(listings)
        return (
            <div className = "listing-index-container">
                <div className = "index-map-container">
                <button onClick = {this.routeChangeCreate} className = "sign-in-button show-page-outreach-button">Create A Listing</button>
                    <br/>
                    
                <div className = "index-map"><MapContainer /></div>
                </div>
                <ul className = "listing-index">
                    {listings.map(listing =>( 
                        <ListingItem 
                        key = {listing.id} 
                        listing = {listing} 
                        updateListing = {updateListing} 
                        />
                        ))}
                </ul>
            </div>
        )
    }
}

export default ListingIndex