import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {withRouter} from 'react-router-dom'
import { faHeart  as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as RegHeart } from '@fortawesome/free-regular-svg-icons'
import Modal from '../../modal/modal'


class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            liked: '',
        }
        
        this.routeChangeEdit = this.routeChangeEdit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.showAgentInfo = this.showAgentInfo.bind(this)
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.id)
        if(this.props.currentUser) {
            this.props.getUserLikes(this.props.currentUser.id, this.props.match.params.id)
        }
    }

    componentWillUnmount() {
        this.props.clearListings()
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

      showAgentInfo() {
          const button = document.getElementById('agentinfobutton')
          button.style.display = "none"
          const agentInfo = document.getElementById('agentinfowindow')
          agentInfo.style.display = "flex"
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
                <div className = "listing-show-page-pictures" style = {{backgroundImage : `url(${listing.image_url})`}} />
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
                
                    <span className = "listing-show-page-price">${listing.price.toLocaleString()} {listing.purchase ? null : 'per month ' }</span>
                    
                    <span className = "listing-show-page-sizes">{listing.num_bedrooms} bd | {listing.num_bathrooms} ba | {listing.sqft} sqft</span>
                    {/* <h3>Agent: {listing.creator.email}</h3> */}

                    <p className = "index-item-address">{listing.street_number} {listing.street_name},{listing.unit_number ? ` Unit ${listing.unit_number},`: null} {listing.city_name}, {listing.state}, {listing.zipcode}
                    </p>
                    <button className = "show-page-outreach-button  sign-in-button white-zillow-button" id= "agentinfobutton" onClick = {() => this.showAgentInfo()}>Contact Agent</button>
                    <div id = "agentinfowindow">
                    You can contact the person who listed this property at:<br/>
                    Email: {listing.creator.email}<br/>
                    Phone: Coming soon</div>
                    {this.props.currentUser ? this.props.currentUser.email === listing.creator.email ?
                    // <>
                    // <div className = "listing-show-outreach">
                    //     <button className = "show-page-outreach-button  sign-in-button white-zillow-button" onClick = {() => openModal('agentinfo')}>Contact Agent</button>
                    //     <button className = "show-page-outreach-button sign-in-button">Take a Tour</button>
                    // </div>
                    // <>{this.props.currentUser.email === listing.creator.email ? 
                    // <>
                    // <br/>
                    <div className = "listing-show-outreach">
                    <button onClick={this.routeChangeEdit} className = "show-page-outreach-button sign-in-button">Edit Listing</button>
                    <button onClick={() => deleteListing(listing.id).then(() => this.props.history.push('/listings'))} className = "show-page-outreach-button  sign-in-button white-zillow-button">Delete Listing</button>
                    </div>
                    : null : null } 
                </div>
            </div>
        )
    }
}

export default withRouter(ListingShow)