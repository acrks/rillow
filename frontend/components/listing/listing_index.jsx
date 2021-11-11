import React from 'react'
import CreateListingForm from './listing_form/listing_form_container'
import ListingItem from './listing_item'
import { Link } from "react-router-dom";
import MapContainer from '../map/map'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
        if(this.props.location.searchTerm) {
            this.state = {search: this.props.location.searchTerm}
        }
        else {
            this.state = {search: ''}
        }
        this.updateSearch = this.updateSearch.bind(this)
        this.routeChangeCreate = this.routeChangeCreate.bind(this)
    }

    componentDidMount() {
        this.props.getListings()
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        this.props.clearListings()
    }

    updateSearch(e) {
        this.setState({search: e.target.value})
      }

    routeChangeCreate() {
        let path = `/listings/create`;
        this.props.history.push(path);
    }

    render() {
        const searchTerm = this.state.search

        const { listings, updateListing} = this.props
        return (
            <>
            <div className = "listing-index-search-bar" >
            <input className = "input-search" type="text" placeholder="search..." value = {this.state.search} onChange={this.updateSearch}/>
            </div> 
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
                {
                this.props.listings.filter((val) => {
                if (searchTerm === '') {
                    return val
                } else if (val.street_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.city_name.toLowerCase().includes(searchTerm.toLowerCase()) || (val.zipcode).toString().includes(searchTerm))
                    return val
                }).map(listing => <ListingItem key={listing.id} listing={listing} updateListing={updateListing}/> )
                }
                </ul>
                </div>
            </div>
            </>
        )
    }
}

export default ListingIndex