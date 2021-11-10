import React from 'react'
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        return e => {this.setState({searchTerm: e.currentTarget.value})}
    }
    
    render() {
        return (
            <div className = "search-bar">
                <span className = "headline home-headline">Change starts here</span>
            <form className = "search-bar-element">
                <input type = "text" placeholder = "Enter a street name, city, or ZIP code" value = {this.state.searchTerm} onChange = {this.handleChange()}/>
                <button type="submit"><i className="fa fa-search" onClick = {() => this.props.history.push({pathname: "/listings/", searchTerm: this.state.searchTerm})}></i></button>
            </form>
            </div>
        )
    }
}

export default withRouter(SearchBar)