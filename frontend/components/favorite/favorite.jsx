import React from "react";

class Favorite extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this)
  }



  render() {
    return (
      <div className="favorite-container" onClick = {this.handleClick}>
        {this.props.favorite.length ? <><i className="fas fa-heart" ></i> <span>Saved</span></>  : <><i className="far fa-heart"></i><span> Save</span></>}
      </div>
    );
  }
}
  
export default Favorite;