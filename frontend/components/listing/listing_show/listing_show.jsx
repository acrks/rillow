import React from 'react'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.id)
    }
    
    render() {
        if(!this.props.listing) {
            return null
        }
        const {listing} = this.props
        return(
            <div className = "listing-show">
            <h3>Agent: {listing.creator.email}</h3>
            <h3>${listing.price} {listing.purchase ? null : 'per month' }</h3>
            <p className = "index-item-address">{listing.street_number} {listing.street_name}
            <br/>
            {listing.city_name}, {listing.zipcode}
            </p>
            Favorite will go here<br/>
            Picture will go here<br/>
            Schedule tour here
            </div>
        )
    }
}

export default ListingShow