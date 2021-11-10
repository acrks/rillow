import React from 'react'
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component {
    render() {
        return (
            <div className = "search-bar">
                <span className = "headline home-headline">Change starts here</span>
            <form className = "search-bar-element">
                <input type = "text" placeholder = "Enter a streetname, city, or ZIP code"/>
                <button type="submit"><i className="fa fa-search" onClick = {() => this.props.history.push("/listings/")}></i></button>
            </form>
            </div>
        )
    }
}

export default withRouter(SearchBar)