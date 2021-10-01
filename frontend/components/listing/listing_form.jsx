import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';


class ListingForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.listing

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(field) {
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

    handleSubmit(e) {
        this.props.action(this.state)
    }
    
    render() {
        return (
        <div>
            {this.props.currentUser ? <form className = "listing_form" onSubmit = {this.handleSubmit}>
            <h1>{this.props.formType}</h1>
            <label>Street Number
                <input type = "text" value = {this.state.street_number} onChange = {this.handleChange('street_number')}/>
            </label>
            <label>Street Name
                <input type = "text" value = {this.state.street_name} onChange = {this.handleChange('street_name')}/>
            </label>
            <label>Zipcode
                <input type = "text" value = {this.state.city_name} onChange = {this.handleChange('city_name')}/>
            </label>
            <label>For Purchase?
                <input type = "radio" value = {true} onChange = {this.handleChange('purchase')}/>For Sale
                <input type = "radio" value = {false} onChange = {this.handleChange('purchase')}/>For Rent
            </label>
            <label>Price
                <input type = "text" value = {this.state.street_name} onChange = {this.handleChange('price')}/>
            </label>
            <button>{this.props.formType}</button>
        </form> : 'Please log in to continue'}
        </div>
    )
    }
}

export default ListingForm