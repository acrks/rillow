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
        return (
            <div className = "listing-index-container">
                    
                <div className = "index-map-container">
                <MapContainer listings={listings}/>
                </div>
                <div className = "listing-index-items">
                    <div className = "listing-index-item-navbar">
                {listings.length} listings total
                    <br/>
                <button onClick = {this.routeChangeCreate} className = "sign-in-button show-page-outreach-button">Create A Listing</button>
                    </div>
                <ul className = "listing-index">
                {/* {
            this.props.stylists.filter((val) => {
              if (searchTerm === '') {
                return val
              } else if (val.handle.toLowerCase().includes(searchTerm.toLowerCase()) || val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || val.address.toLowerCase().includes(searchTerm.toLowerCase()))
                return val
            }).map( (stylist, i) => <StylistIndexItem key={i} stylist={stylist}/> )
          } */}
                    {listings.map(listing =>( 
                        <ListingItem 
                        key = {listing.id} 
                        listing = {listing} 
                        updateListing = {updateListing} 
                        />
                        ))}
                </ul>
                </div>
            </div>
        )
    }
}

export default ListingIndex