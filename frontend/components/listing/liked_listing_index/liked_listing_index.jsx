import React from 'react'
import LikedListingIndexItem from './liked_listing_item_container'

class LikedListingIndex extends React.Component {
    componentDidMount() {
        this.props.getUserLikes(this.props.currentUser.id)
    }

    render() {
        if(!this.props.favorites) {
            return null
        }
        
        const {favorites} = this.props
        // console.log(listings)
        return (
            <div className = "listing-index-container">
                Saved Homes<br/>
                {this.props.favorites.length} saved homes
                <ul className = "listing-index">
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