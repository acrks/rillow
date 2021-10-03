import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
            <div className = "search-bar">
                <span className = "headline home-headline">Change starts here</span>
            <form className = "search-bar-element">
                <input type = "text" placeholder = "Enter an address, neighborhood, or ZIP code"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
            </div>
        )
    }
}

export default SearchBar