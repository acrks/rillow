import React from 'react'
import {withRouter} from 'react-router-dom'


class LikedListingItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favorites: this.props.favorites
        }
        this.directToPage = this.directToPage.bind(this)
    }

    directToPage(e) {
        e.preventDefault()
        let path = `/listings/${this.props.listing[this.props.index].id}`;
        this.props.history.push(path);
    }


    componentDidMount() {
        this.props.fetchListing(this.props.listingId)
    } 
    
    render(){
        if(!this.props.listing[this.props.index]) {
            return null
        }
        const { listing, index } = this.props
        let likedListing = listing[index]
        return (
            <div className = "liked-listing-item" onClick = {this.directToPage}>
                <div className = "liked-listing-item-thumbnail" style = {{backgroundImage : `url(${likedListing.image_url})`}} />
                <div className = "liked-listing-item-info">
                <span className = "listing-index-item-price">${likedListing.price} {likedListing.purchase ? null : `per month` }</span>
                {likedListing.num_bedrooms} bds   {likedListing.num_bathrooms} ba   {likedListing.sqft} sqft<br/>
                <span className = "liked-listing-item-address">{likedListing.street_number} {likedListing.street_name}, {likedListing.city_name}, {likedListing.state} {likedListing.zipcode}</span>
                </div>
            </div>
        )
    }
}

export default withRouter(LikedListingItem)