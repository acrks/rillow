import React from 'react'
import ListingItem from '.././listing_item_container'

class LikedListingIndex extends React.Component {
    componentDidMount() {
        this.props.getUserLikes(this.props.currentUser.id)
    }

    render() {
        if(!this.props.favorites) {
            return null
        }
        const {favorites} = this.props
        let listingArr = []
        // for(let i = 0; i < favorites.length; i++) {
        //     let listing = this.props.fetchListing(favorites[i].listing_id)
        //     listingArr.push(listing)
        // }
        console.log(listingArr)
        return (
            <div className = "listing-index-container">
                <div className = "index-map-container">
                    <br/>
                <div className = "index-map"></div>
                </div>
                <ul className = "listing-index">
                    {favorites.map(fav => (
                        <p>{fav.listing_id}</p>
                    ))}
                    {/* {listingArr.map(listing =>( 
                        <ListingItem 
                        key = {listing.id} 
                        listing = {listing} 
                        />
                        ))} */}
                </ul>
            </div>
        )
    }
}

export default LikedListingIndex