import React from 'react'
import LikedListingIndexItem from './liked_listing_item_container'

class LikedListingIndex extends React.Component {
    componentDidMount() {
        this.props.getUserLikes(this.props.currentUser.id)
    }

    componentWillUnmount() {
        this.props.clearListings()
    }

    render() {
        if(!this.props.favorites) {
            return null
        }
        
        const {favorites} = this.props
        // console.log(listings)
        return (
            <div className = "liked-listing-index-container">
            <div className = "liked-listing-index-header">
                <div className = "liked-listing-index-subheader">Saved homes</div><br/>
                <div className = "liked-listing-index-commcentral">
                    {favorites.length} saved homes
                </div>
            </div>
                <ul className = "liked-listing-index">
                    {favorites.map((fav, i) => (
                        <LikedListingIndexItem
                        key = {fav.id}
                        index = {i}
                        listingId = {fav.listing_id}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default LikedListingIndex