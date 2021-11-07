import React from 'react'
import {withRouter} from 'react-router-dom'


class LikedListingItem extends React.Component {
    constructor(props) {
        super(props)

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
                <div className = "liked-listing-item-thumbnail" style = {{backgroundImage : `url(${likedListing.image_url})`}}></div>
                ${likedListing.price} {likedListing.purchase ? `per month` : null}<br/>
                {likedListing.num_bedrooms} beds<br/>
                {likedListing.num_bathrooms} baths<br/>
                {likedListing.sqft} sqft<br/>
                {likedListing.street_number} {likedListing.street_name}, {likedListing.city_name}, {likedListing.state} {likedListing.zipcode}<br/>
            </div>
        )
    }
}

export default withRouter(LikedListingItem)