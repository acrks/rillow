import React from 'react'
import {withRouter} from 'react-router-dom'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)

        this.routeChangeEdit = this.routeChangeEdit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.id)
        // this.props.getListingLikes(this.props.match.params.id)
        this.props.getUserLikes(this.props.currentUser.id, this.props.match.params.id)
    }

    handleClick(e) {
        e.preventDefault()
        if(this.props.favorite.length) {
          this.props.deleteFavorite(this.props.favorite[0])
        }
        else {
          const favorite = {
            favoriter_id: this.props.currentUser.id,
            listing_id: this.props.listing.id
          }
          this.props.createFavorite(favorite)
        }
        this.props.getUserLikes(this.props.currentUser.id, this.props.listing.id)
      }
    
    routeChangeEdit() {
        let path = `/listings/${this.props.listing.id}/edit`;
        this.props.history.push(path);
    }

    render() {
        if(!this.props.listing) {
            return null
        }
        const {listing, deleteListing} = this.props
        return(
            <div className = "listing-show">
                <img className = "listing-show-item-thumbnail" src = {listing.image_url} alt = "index_item_thumbnail"></img>
                <div className = "listing-show-page-info">
                    <div className = "listing-show-page-banner">
                        <div className = "listing-show-page-logo logo"></div>
                        <div className="favorite-container" onClick = {this.handleClick}>
                        {this.props.favorite.length ? <><i className="fas fa-heart" ></i> <span>Saved</span></>  : <><i className="far fa-heart"></i><span> Save</span></>}
                        </div>                            {/* {this.props.currentUser ? <div className = "save-share-more"><Favorite listing = {listing} favoritesArr = {this.props.favorite}/></div> : <div className = "save-share-more">Please sign in to save a listing to your favorites</div> } */}
                    </div>
                
                    <span className = "listing-show-page-price">${listing.price} {listing.purchase ? null : 'per month ' }</span>
                    
                    <span className = "listing-show-page-sizes">{listing.num_bedrooms} bd | {listing.num_bathrooms} ba | {listing.sqft} sqft</span>
                    {/* <h3>Agent: {listing.creator.email}</h3> */}

                    <p className = "index-item-address">{listing.street_number} {listing.street_name}, {listing.city_name}, {listing.state}, {listing.zipcode}
                    </p>

                    {this.props.currentUser ?
                    <>
                    <div className = "listing-show-outreach">
                        <button className = "show-page-outreach-button  sign-in-button white-zillow-button">Contact Agent</button>
                        <button className = "show-page-outreach-button sign-in-button">Take a Tour</button>
                    </div>
                    <>{this.props.currentUser.email === listing.creator.email ? 
                    <>
                    <br/>
                    <button onClick={this.routeChangeEdit}>Edit Listing</button>
                    <br/>
                    <button onClick={() => deleteListing(listing.id).then(() => this.props.history.push('/listings'))}>Delete Listing</button>
                    </> : null} 
                    </>
                    </> : `Please sign in to schedule a tour or make changes to the listing`}
                </div>
            </div>
        )
    }
}

export default withRouter(ListingShow)