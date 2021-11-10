import React from 'react'
import { withRouter } from 'react-router-dom';
// import MAPS_API_KEY from '../../../config/application.yml'


class ListingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listing: this.props.listing,
            errors: {}
        }
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
        return e => {this.setState({listing: {
          ...this.state.listing,
          [field]: e.currentTarget.value
        }})}
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

    handleSubmit(e) {
        e.preventDefault()
        let geocoder = new google.maps.Geocoder();
        let that = this;
        geocoder.geocode( {address:`${this.state.listing.street_number}, ${this.state.listing.street_name} ${this.state.listing.city_name}, ${this.state.listing.state}, ${this.state.listing.zipcode}`}, 
        function(results, status) 
        {
            if (status === google.maps.GeocoderStatus.OK) 
            {
                that.setState({listing: {
                    ...that.state.listing,
                    latitude: results[0].geometry.location.lat()
                }})
                that.setState({listing: {
                    ...that.state.listing,
                    longitude: results[0].geometry.location.lng()
                }})     
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        })
        const formData = new FormData();
        //   let latLng = data.results[0].geometry.location
        formData.append('listing[street_number]', this.state.listing.street_number)
        formData.append('listing[street_name]', this.state.listing.street_name)
        formData.append('listing[city_name]', this.state.listing.city_name)
        formData.append('listing[zipcode]', this.state.listing.zipcode)
        formData.append('listing[purchase]', this.state.listing.purchase)
        formData.append('listing[state]', this.state.listing.state)
        formData.append('listing[num_bedrooms]', this.state.listing.num_bedrooms)
        formData.append('listing[num_bathrooms]', this.state.listing.num_bathrooms)
        formData.append('listing[sqft]', this.state.listing.sqft)
        formData.append('listing[creator_id]', this.state.listing.creator_id)
        if (this.state.listing.picture) {
            formData.append('listing[picture]', this.state.listing.picture);
          }
        if (this.state.listing.unit_number) {
            formData.append('listing[unit_number]', this.state.listing.unit_number);
        }
        formData.append('listing[price]', this.state.listing.price)
        formData.append('listing[latitude]', this.state.listing.latitude)
        formData.append('listing[longitude]', this.state.listing.longitude)

        const listing = Object.assign({}, this.state.listing)
        if(this.props.formType === 'Create Listing') {
            this.props.action(formData)
            .then(() => this.props.history.push(`/listings`))
            this.setState({errors: this.props.errors})
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
              <li className = "error-message" key={i}>
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
                {!this.state.listing.image_url ? <div className = "listing-form-picture">Pictures of your listing</div> : <div className = "listing-form-picture" style = {{backgroundImage : `url(${this.state.image_url})`}} />}
            {/* </div> */}
        <div className = "listing-form-info">
        <form className = "listing-form-forms" onSubmit = {this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <div className = "listing-form-labels">
        <label>Street Number
            <input type = "text" placeholder = "1000" value = {this.state.listing.street_number} onChange = {this.handleChange('street_number')}/>
        </label>
        <label>Street Name
            <input type = "text" placeholder = "Any Street" value = {this.state.listing.street_name} onChange = {this.handleChange('street_name')}/>
        </label>
        <label>Unit Number
            <input type = "text" placeholder = "If applicable" value = {this.state.listing.unit_number} onChange = {this.handleChange('unit_number')}/>
        </label>
        <label>City
            <input type = "text" placeholder = "Any Town" value = {this.state.listing.city_name} onChange = {this.handleChange('city_name')}/>
        </label>
        <label>State
            <select value = {this.state.listing.state} onChange = {this.handleChange('state')}>
                <option value="" disabled defaultValue>Select a state</option>
                {this.stateList.map((state, index) => <option value={state} key = {index}>{state}</option>)}
            </select>
        </label>       
        <label>Zipcode
            <input type = "text" placeholder = "10000" value = {this.state.listing.zipcode} onChange = {this.handleChange('zipcode')}/>
        </label>
        <label>For Purchase?
            <input 
            type = "radio" 
            value = {true}
            checked={this.state.listing.purchase === true || this.state.listing.purchase === 'true'}
            onChange = {this.handleChange('purchase')}/>
        </label>
        <label>For Rental?
            <input 
            type = "radio"
            value = {false}
            checked={this.state.listing.purchase === false || this.state.listing.purchase === 'false'}
            onChange = {this.handleChange('purchase')}/>
        </label>
        <label>Price
            <input type = "number" placeholder = "0" value = {this.state.listing.price} onChange = {this.handleChange('price')}/>
        </label>
        <label>Square Footage
            <input type = "number" placeholder = "0" value = {this.state.listing.sqft} onChange = {this.handleChange('sqft')}/>
        </label>
        <label>Number of Bedrooms: {this.state.listing.num_bedrooms}
            {/* <p>Number of bedrooms{this.state.num_bedrooms}</p> */}
            <br/>
            <input type="range" min="1" max="12" value={this.state.listing.num_bedrooms} onChange = {this.handleChange('num_bedrooms')}/>
        </label>
        <label>Number of Bathrooms: {this.state.listing.num_bathrooms}
            <br/>
            <input type="range" min="1" max="12" step = "0.5" value={this.state.listing.num_bathrooms} onChange = {this.handleChange('num_bathrooms')}/>

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