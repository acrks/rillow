import React from 'react'
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleKeypress = this.handleKeypress.bind(this)
    }

    handleChange(e) {
        return e => {this.setState({searchTerm: e.currentTarget.value})}
    }

    handleSubmit(e) {
        this.props.history.push({pathname: "/listings/", searchTerm: this.state.searchTerm})
    }

    handleKeypress(e){
      //it triggers by pressing the enter key
        if (e.key === "Enter") {
        this.handleSubmit();
        }
    };
    
    render() {
        return (
            <div className = "search-bar">
                <span className = "headline home-headline">Change starts here</span>
            <form className = "search-bar-element">
                <input type = "text" placeholder = "Enter a street name, city, or ZIP code" value = {this.state.searchTerm} onChange = {this.handleChange()} onKeyPress = {this.handleKeypress}/>
                <button type="submit"><i className="fa fa-search" onClick = {this.handleSubmit}></i></button>
            </form>
            </div>
        )
    }
}

export default withRouter(SearchBar)