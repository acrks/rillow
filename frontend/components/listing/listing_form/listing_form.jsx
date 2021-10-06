import React from 'react'
import { withRouter } from 'react-router-dom';


class ListingForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.listing
        this.stateList = ['Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming']
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
        e.preventDefault()
        const listing = Object.assign({}, this.state)
        console.log(listing)
        if(this.props.formType === 'Create Listing') {
            this.props.action(listing)
            .then(() => this.props.history.push(`/listings`))
        }
        else {
            this.props.action(listing)
            .then(() => this.props.history.push(`/listings/${listing.id}`))
        }
    }

    formRender() {
        return(
            // Add place holders
        <div>
        <form className = "listing-form" onSubmit = {this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <label>Street Number
            <input type = "text" placeholder = {this.state.street_number} value = {this.state.street_number} onChange = {this.handleChange('street_number')}/>
        </label>
        <label>Street Name
            <input type = "text" placeholder = {this.state.street_name} value = {this.state.street_name} onChange = {this.handleChange('street_name')}/>
        </label>
        <label>City
            <input type = "text" placeholder = "Anytown" value = {this.state.city_name} onChange = {this.handleChange('city_name')}/>
        </label>
        {/* Consider a dropdown */}
        <label>State
            <select value = {this.state.state} onChange = {this.handleChange('state')}>
                {this.stateList.map((state, index) => <option value={state} key = {index}>{state}</option>)}
            </select>
        </label>       
        <label>Zipcode
            <input type = "text" placeholder = "10000" value = {this.state.zipcode} onChange = {this.handleChange('zipcode')}/>
        </label>
        <label>For Purchase?
            <input 
            type = "radio" 
            value = "true"
            checked={this.state.purchase === "true"}
            onChange = {this.handleChange('purchase')}/>
        </label>
        <label>For Rental?
            <input 
            type = "radio"
            value = "false"
            checked={this.state.purchase === "false"}
            onChange = {this.handleChange('purchase')}/>
        </label>
        <label>Price
            <input type = "number" placeholder = "0" value = {this.state.price} onChange = {this.handleChange('price')}/>
        </label>
        <label>Square Footage
            <input type = "number" placeholder = "0" value = {this.state.sqft} onChange = {this.handleChange('sqft')}/>
        </label>
        <label>Number of Bedrooms: {this.state.num_bedrooms}
            {/* <p>Number of bedrooms{this.state.num_bedrooms}</p> */}
            <br/>
            <input type="range" min="1" max="12" value={this.state.num_bedrooms} onChange = {this.handleChange('num_bedrooms')}/>
        </label>
        <label>Number of Bathrooms: {this.state.num_bathrooms}
            <br/>
            <input type="range" min="1" max="12" step = "0.5" value={this.state.num_bathrooms} onChange = {this.handleChange('num_bathrooms')}/>

            {/* <input type = "number" placeholder = "0" step="0.5" value = {this.state.num_bathrooms} onChange = {this.handleChange('num_bathrooms')}/> */}
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