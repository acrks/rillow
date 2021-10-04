import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';


class ListingForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.listing

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.formRender = this.formRender.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    handleChange(field) {
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

    handleSubmit(e) {
        this.props.action(this.state)
    }

    formRender() {
        return(
        <div>
        <form className = "listing_form" onSubmit = {this.handleSubmit}>
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
            <input type = "text" value = {this.state.price} onChange = {this.handleChange('price')}/>
        </label>
        <button>{this.props.formType}</button>
        </form>
        </div>)
    }
    
    render() {
        //If the formType is update listing
        if(this.props.formType === 'Update Listing') {
            //If the user is logged in
            if(this.props.currentUser !== null) {
                //If the user is not the creator
                if(this.props.currentUser.email !== this.state.creator.email) {
                    //Message
                    return(<p>Cannot edit a post you did not create</p>)
                }
                //If the user is the creator
                else {
                    //formRender
                    return(this.formRender())
                }
            }
            //Else the user is not logged in
            else {
                // Cannot edit unless logged in
                return(<p>Must be logged in to edit a listing</p>)
            }
        }
        //If the formType is create listing
        else {
            // If the user is logged in
            if(this.props.currentUser !== null) {
                return(this.formRender())
            }
            // Else the user is not logged in
            else{
                return(<p>You must be logged in to create a listing</p>)
            }
        }
    }
}

export default ListingForm