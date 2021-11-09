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
        this.changeAddress = this.changeAddress.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    handleChange(field) {
        // console.log(this.state)
        return e => {this.setState({[field] : e.currentTarget.value})}
    }

    handleFile(e) {
        this.setState({picture: e.currentTarget.files[0]})
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
        this.setState({ image_url: reader.result, imageFile: file });

        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ image_url: "", imageFile: null });
        }
    }

    changeAddress() {
        String.prototype.replaceAt = function(index, replacement) {
            return this.substr(0, index) + replacement + this.substr(index + replacement.length);
        }
        let result = ""
        let street_name_copy = this.state.street_name
        let city_name_copy = this.state.city_name
        while(street_name_copy.includes(' ')) {
            let index = street_name_copy.indexOf(' ')
            street_name_changed = street_name.replaceAt(index, '%20')
        }
        while(city_name_copy.includes(' ')) {
            let index = city_name_copy.indexOf(' ')
            city_name_copy = street_name.replaceAt(index, '%20')
        }
        result = `${this.state.street_number}%20${street_name_copy}%20${city_name_copy}%20${this.state.state}%20${this.state.zipcode}`
        return result
    }

    handleSubmit(e) {
        e.preventDefault()
        let googleApiAddress = this.changeAddress()
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${googleApiAddress}%20San%20Francisco&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
        .then(response=>response.json())
        .then(data=> {
          let latLng = data.results[0].geometry.location
        const formData = new FormData();
        formData.append('listing[street_number]', this.state.street_number)
        formData.append('listing[street_name]', this.state.street_name)
        formData.append('listing[city_name]', this.state.city_name)
        formData.append('listing[zipcode]', this.state.zipcode)
        formData.append('listing[purchase]', this.state.purchase)
        formData.append('listing[state]', this.state.state)
        formData.append('listing[num_bedrooms]', this.state.num_bedrooms)
        formData.append('listing[num_bathrooms]', this.state.num_bathrooms)
        formData.append('listing[sqft]', this.state.sqft)
        formData.append('listing[price]', this.state.price)
        formData.append('listing[picture]', this.state.picture)
        formData.append('listing[latitude]', latLng.lat)
        formData.append('listing[longitude]', latLng.lng)
        })
        const listing = Object.assign({}, this.state)
        if(this.props.formType === 'Create Listing') {
            this.props.action(formData)
            .then(() => this.props.history.push(`/listings`))
        }
        else {
            this.props.action(listing)
            .then(() => this.props.history.push(`/listings/${listing.id}`))
        }
    }

    renderErrors() {
        return(
          <ul className = "error-list">
            {this.props.errors.map((error, i) => (
              <li className = "error-message" key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

    formRender() {
        return(
            // Add place holders
        <div className = "listing-form">
            {/* <div className = "listing-form-picture"> */}
                {/* <img src = {this.state.image_url} alt = "listing-form-picture"/> */}
                {!this.state.image_url ? <div className = "listing-form-picture">Pictures of your listing</div> : <div className = "listing-form-picture" style = {{backgroundImage : `url(${this.state.image_url})`}} />}
            {/* </div> */}
        <div className = "listing-form-info">
        <form className = "listing-form-forms" onSubmit = {this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <div className = "listing-form-labels">
        <label>Street Number
            <input type = "text" placeholder = "1000" value = {this.state.street_number} onChange = {this.handleChange('street_number')}/>
        </label>
        <label>Street Name
            <input type = "text" placeholder = "Any Street" value = {this.state.street_name} onChange = {this.handleChange('street_name')}/>
        </label>
        <label>City
            <input type = "text" placeholder = "Any Town" value = {this.state.city_name} onChange = {this.handleChange('city_name')}/>
        </label>
        {/* Consider a dropdown */}
        <label>State
            <select value = {this.state.state} onChange = {this.handleChange('state')}>
                <option value="" disabled defaultValue>Select a state</option>
                {this.stateList.map((state, index) => <option value={state} key = {index}>{state}</option>)}
            </select>
        </label>       
        <label>Zipcode
            <input type = "text" placeholder = "10000" value = {this.state.zipcode} onChange = {this.handleChange('zipcode')}/>
        </label>
        <label>For Purchase?
            <input 
            type = "radio" 
            value = {true}
            checked={this.state.purchase === true || this.state.purchase === 'true'}
            onChange = {this.handleChange('purchase')}/>
        </label>
        <label>For Rental?
            <input 
            type = "radio"
            value = {false}
            checked={this.state.purchase === false || this.state.purchase === 'false'}
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
        {this.props.formType === "Update Listing" ? null : <input type = 'file' onChange = {this.handleFile.bind(this)}/>} 
        
        </div>
        {this.renderErrors()}
        <button className = "sign-in-button listing-form-submit-button">{this.props.formType}</button>
        </form>
        </div>
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