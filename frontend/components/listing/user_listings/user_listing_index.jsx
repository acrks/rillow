import React from 'react'
import UserListingIndexItem from './user_listing_item_container'

class UserListingIndex extends React.Component {
    componentDidMount() {
        this.props.getUserListings(this.props.currentUser.id)
    }

    render() {
        if(!this.props.listings) {
            return null
        }
        
        const {listings} = this.props
        return (
            <div className = "liked-listing-index-container">
            <div className = "liked-listing-index-header">
                <div className = "liked-listing-index-subheader">My listings</div><br/>
                <div className = "liked-listing-index-commcentral">
                    {listings.length} homes listed on Rillow
                </div>
            </div>
                <ul className = "liked-listing-index">
                    {listings.map((listing, i) => (
                        <UserListingIndexItem
                        key = {listing.id}
                        listing = {listing}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default UserListingIndex