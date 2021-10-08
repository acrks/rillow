
import React from "react";
import favoritesReducer from "../../reducers/favorites_reducer";
class Like extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = this.props.favorite;
    for(let i = 0; i < this.props.favoritesArr.length; i++) {
      if(this.props.favoriter_id === this.props.favoritesArr[i].favoriter_id && this.props.listing.id === this.props.favoritesArr[i].listing_id) {
        this.state.liked = true
      }
    }
    this.handleCreate = this.handleCreate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleCreate(e) {
    const favorite = {
      favoriter_id: this.props.currentUser.id,
      listing_id: this.props.listing.id
    }
    this.props.createFavorite(favorite)
  }

  handleDelete() {
    this.props.DeleteFavorite(this.props.favorites.id)
  }

  render() {
    let liked = Object.values(this.props.favorites)[0].favoriter_id == this.props.currentUser.id
    // .filter(favorite => favorite.favoriter_id === this.props.currentUser.id)
    // console.log(Object.values(this.props.favorites).filter(fav => fav.favoriter_id === this.props.currentUser.id));
    console.log(Object.values(this.props.favorites)[0].favoriter_id == this.props.currentUser.id)
    console.log(Object.values(this.props.favorites)[0].favoriter_id)
    console.log(this.props.currentUser.id)
    return (
      <div className="container" onClick = {() => this.toggle()}>
        {liked ? <i class="far fa-heart" onClick = {this.handleDelete}></i> : <i class="fas fa-heart" onClick = {this.handleCreate}></i>}
      </div>
    );
  }
}
  
export default Like;