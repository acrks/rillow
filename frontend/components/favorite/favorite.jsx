import React from "react";

class Favorite extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.props.favorite[0])
    if(this.props.favorite.length) {
      this.props.deleteFavorite(this.props.favorite[0])
    }
    else {
      const favorite = {
        favoriter_id: this.props.user.id,
        listing_id: this.props.listing.id
      }
      this.props.createFavorite(favorite)
    }
  }

  render() {
    // console.log(this.props.listings)
    return (
      <div className="favorite-container" onClick = {this.handleClick}>
        {this.props.favorite.length ? <><i className="fas fa-heart" ></i> <span>Saved</span></>  : <><i className="far fa-heart"></i><span> Save</span></>}
      </div>
    );
  }
}
  
export default Favorite;