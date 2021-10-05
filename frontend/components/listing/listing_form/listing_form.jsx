import React from 'react'
import { withRouter } from 'react-router-dom';


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
        if(field === 'zipcode' || field === 'num_bedrooms' || field === 'num_bathrooms' || field === 'price' || field === 'street_number' ) {
            return e => {this.setState({[field] : parseInt(e.currentTarget.value)})}
        }
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

    handleSubmit(e) {
        e.preventDefault()
        const listing = Object.assign({}, this.state)
        console.log(listing)
        this.props.action(listing)
        .then(() => this.props.history.push('/listings'))
    }

    formRender() {
        return(
            // Add place holders
        <div>
        <form className = "listing-form" onSubmit = {this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <label>Street Number
            <input type = "text" value = {this.state.street_number} onChange = {this.handleChange('street_number')}/>
        </label>
        <label>Street Name
            <input type = "text" value = {this.state.street_name} onChange = {this.handleChange('street_name')}/>
        </label>
        <label>City
            <input type = "text" value = {this.state.city_name} onChange = {this.handleChange('city_name')}/>
        </label>
        {/* Consider a dropdown */}
        <label>State
            <input type = "text" value = {this.state.state} onChange = {this.handleChange('state')}/>
        </label>
        <label>Zipcode
            <input type = "text" value = {this.state.zipcode} onChange = {this.handleChange('zipcode')}/>
        </label>
        <label>For Purchase?
            <input type = "radio" value = "true" onChange = {this.handleChange('purchase')}/>For Sale
            <input type = "radio" value = "false" onChange = {this.handleChange('purchase')}/>For Rent
        </label>
        <label>Price
            <input type = "number" value = {this.state.price} onChange = {this.handleChange('price')}/>
        </label>
        <label>Square Footage
            <input type = "number" value = {this.state.sqft} onChange = {this.handleChange('sqft')}/>
        </label>
        <label>Number of Bedrooms
            <input type = "number" value = {this.state.num_bedrooms} onChange = {this.handleChange('num_bedrooms')}/>
        </label>
        <label>Number of Bathrooms
            <input type = "number" value = {this.state.num_bathrooms} onChange = {this.handleChange('num_bathrooms')}/>
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

export default withRouter(ListingForm)