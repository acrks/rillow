
import React from "react";

class Favorite extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    if(this.props.favorite.length) {
      this.props.deleteFavorite(this.props.favorite.id)
    }
    else {
      const favorite = {
        favoriter_id: this.props.currentUser.id,
        listing_id: this.props.listing.id
      }
      this.props.createFavorite(favorite)
    }
  }

  render() {
    return (
      <div className="favorite-container" onClick = {this.handleClick}>
        {this.props.favorite.length ? <><i className="far fa-heart" ></i> <span>Saved</span></>  : <><i className="fas fa-heart" onClick = {this.handleCreate}></i> Saved</>}
      </div>
    );
  }
}
  
export default Favorite;