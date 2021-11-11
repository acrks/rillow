import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {withRouter} from 'react-router-dom'
import { faHeart  as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as RegHeart } from '@fortawesome/free-regular-svg-icons'


class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            liked: '',
        }
        
        this.routeChangeEdit = this.routeChangeEdit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.id)
        if(this.props.currentUser) {
            this.props.getUserLikes(this.props.currentUser.id, this.props.match.params.id)
        }
        // if(this.props.favorite) {
        //     this.setState({liked: true})
        // }
    }

    handleClick(e) {
        e.preventDefault()
        if(this.state.liked || this.props.favorite[0]) {
        //   this.props.getUserLikes(this.props.currentUser.id, this.props.listing.id)
          this.props.deleteFavorite(this.props.favorite[0].id)
          this.setState({liked : false})
        }
        else {
          const favorite = {
            favoriter_id: this.props.currentUser.id,
            listing_id: this.props.listing.id
          }
          this.props.createFavorite(favorite)
          this.setState({liked : true})
        }
        // this.props.getUserLikes(this.props.currentUser.id, this.props.listing.id)
        // this.setState({like: this.props.favorite[0]})
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
                        {this.props.currentUser ? 
                        (this.props.favorite[0] ? <><FontAwesomeIcon icon={solidHeart} /><span> Saved</span></>  : <><FontAwesomeIcon icon={RegHeart} /><span> Save</span></>)
                        : <p>Please login to save a listing </p>
                        }
                        </div>                        
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