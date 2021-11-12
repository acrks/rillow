import React from 'react'
import { withRouter } from 'react-router-dom';


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
        this.getLngLat = this.getLngLat.bind(this)
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
        // this.setState({picture: e.currentTarget.files[0]})
        this.setState({listing: {
            ...this.state.listing,
            picture: e.currentTarget.files[0]
        }})
        console.log(this.state)
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({listing: {
            ...this.state.listing,
            image_url: reader.result,
            imageFile: file
        }})
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({listing: {
            ...this.state.listing,
            image_url: "",
            imageFile: null
        }})
        // this.setState({ image_url: "", imageFile: null });
        }
    }

    async getLngLat() {
        let geocoder = new google.maps.Geocoder();
        try {
            const response = await geocoder.geocode( {address:`${this.state.listing.street_number}, ${this.state.listing.street_name} ${this.state.listing.city_name}, ${this.state.listing.state}, ${this.state.listing.zipcode}`}) 
            return response.results[0].geometry.location
        }
        catch {
            alert('That address is invalid. Please enter the listing address again')
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        var geocodedAddress = await this.getLngLat()
        
        // console.log(geocodedAddress.lat())
        this.setState({listing: {
            ...this.state.listing,
            latitude: geocodedAddress.lat(),
            longitude: geocodedAddress.lng()
        }})
        
        // if(geocodedAddress.lat)
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
        if (this.state.listing.image_url) {
        formData.append('listing[picture]', this.state.listing.imageFile);
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
        let priceErrorLabel,
        streetNumErrorLabel,
        streetNameErrorLabel,
        cityNameErrorLabel,
        zipcodeErrorLabel,
        stateErrorLabel,
        picErrorLabel,
        sqftErrorLabel = <label></label>

        let errorsArr = Object.values(this.props.errors)

        if (errorsArr.length) {
        errorsArr.forEach(error => {
          if (error === `Price is not a number`) {
            priceErrorLabel = <label className="error-message">Please enter the listing price in the valid format</label>
          }
          if (error === `Price can't be blank`) {
            priceErrorLabel = <label className="error-message">The listing price cannot be empty</label>
          }
          if (error === `Sqft can't be blank`) {
            sqftErrorLabel = <label className="error-message">The square footage of the property must be entered</label>
          }
          if (error === `Street number can't be blank`) {
            streetNumErrorLabel = <label className="error-message">You must enter a street number for a listing</label>
          }
          if (error === `Street number must be greater than or equal to 1`) {
            streetNumErrorLabel = <label className="error-message">The street number must be a number greater than or equal to 1</label>
          }
          if (error === `Street number is not a number`) {
            streetNumErrorLabel = <label className="error-message">Please enter the street number in a valid format</label>
          }
          if (error === `Street name can't be blank`) {
            streetNameErrorLabel = <label className="error-message">The street name of the property must be entered</label>
          }
          if (error === 'Picture must be attached') {
            picErrorLabel = <label className="error-message">At least one picture is required for every listing</label>
        }
          if (error === `Zipcode can't be blank`) {
            zipcodeErrorLabel = <label className="error-message">The zipcode for a property must be entered</label>
        
        }
          if (error === `Zipcode is not a number`) {
            zipcodeErrorLabel = <label className="error-message">The zipcode for a property must be entered in the correct format</label>
        
        }
          if (error === `State can't be blank`) {
            stateErrorLabel = <label className="error-message">Please select a state from the dropdown menu</label>
        
        }
        if (error === `City name can't be blank`) {
            cityNameErrorLabel = <label className="error-message">The city name for a property must be entered</label>
        
        }
          if (error === `Zipcode must be greater than or equal to 10000` || `Zipcode must be less than or equal to 99999`) {
            zipcodeErrorLabel = <label className="error-message">The zipcode must be a number between 10000 and 99999</label>
        }
          if (error === `Price must be greater than or equal to 1`) {
            priceErrorLabel = <label className="error-message">The price must be a positive number greater than or equal to 1</label>
        }
        if (error === `Sqft must be greater than or equal to 1`) {
            sqftErrorLabel = <label className="error-message">The square footage must be a positive number greater than or equal to 1</label>
        }
        })
        }


        return(
            // Add place holders
        <div className = "listing-form">
            {/* <div className = "listing-form-picture"> */}
                {/* <img src = {this.state.image_url} alt = "listing-form-picture"/> */}
                {!this.state.listing.image_url ? <div className = "listing-form-picture">Picture of your listing</div> : <div className = "listing-form-picture" style = {{backgroundImage : `url(${this.state.listing.image_url})`}} />}
            {/* </div> */}
        <div className = "listing-form-info">
        <form className = "listing-form-forms" onSubmit = {this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <div className = "listing-form-labels">
        <label>Street Number
            <input type = "text" placeholder = "1000" value = {this.state.listing.street_number} onChange = {this.handleChange('street_number')}/>
        <br/>
        {streetNumErrorLabel}
        </label>
        <label>Street Name
            <input type = "text" placeholder = "Any Street" value = {this.state.listing.street_name} onChange = {this.handleChange('street_name')}/>
            <br/>
            {streetNameErrorLabel}
        </label>
        <label>Unit Number
            <input type = "text" placeholder = "if applicable" value = {this.state.listing.unit_number} onChange = {this.handleChange('unit_number')}/>
        </label>
        <label>City
            <input type = "text" placeholder = "Any Town" value = {this.state.listing.city_name} onChange = {this.handleChange('city_name')}/>
        <br/>
        {cityNameErrorLabel}
        </label>
        <label>State
            <select value = {this.state.listing.state} onChange = {this.handleChange('state')}>
                <option value="" disabled defaultValue>Select a state</option>
                {this.stateList.map((state, index) => <option value={state} key = {index}>{state}</option>)}
            </select>
        <br/>
        {stateErrorLabel}
        </label>       
        <label>Zipcode
            <input type = "text" placeholder = "10000" value = {this.state.listing.zipcode} onChange = {this.handleChange('zipcode')}/>
        <br/>
        {zipcodeErrorLabel}
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
            <br/>
            {priceErrorLabel}
        </label>
        <label>Square Footage
            <input type = "number" placeholder = "0" value = {this.state.listing.sqft} onChange = {this.handleChange('sqft')}/>
        <br/>
        {sqftErrorLabel}
        </label>
        <label>Number of Bedrooms: {this.state.listing.num_bedrooms}
            {/* <p>Number of bedrooms{this.state.num_bedrooms}</p> */}
            <br/>
            <input type="range" min="1" max="12" value={this.state.listing.num_bedrooms} onChange = {this.handleChange('num_bedrooms')}/>
        </label>
        <label>Number of Bathrooms: {this.state.listing.num_bathrooms}
            <br/>
            <input type="range" min="1" max="12" step = "0.5" value={this.state.listing.num_bathrooms} onChange = {this.handleChange('num_bathrooms')}/>
        </label>

            {/* <input type = "number" placeholder = "0" step="0.5" value = {this.state.num_bathrooms} onChange = {this.handleChange('num_bathrooms')}/> */}
        {this.props.formType === "Update Listing" ? null : <><input type = 'file' onChange = {this.handleFile.bind(this)}/><br/>{picErrorLabel}</>} 
        
        </div>
        {/* {this.renderErrors()} */}
        <button className = "sign-in-button listing-form-submit-button">{this.props.formType}</button>
        </form>
        </div>
        </div>)
    }
    
    render() {
        //If the formType is update listing
        if(this.props.formType === 'Update Listing') {
                //If the user is not the creator
                if(this.props.currentUser.email !== this.state.listing.creator.email) {
                    //Message
                    return(<p>Cannot edit a post you did not create</p>)
                }
                //If the user is the creator
                else {
                    //formRender
                    return(this.formRender())
                }
            }
        //If the formType is create listing
        else {
            // If the user is logged in
            if(this.props.currentUser !== null) {
                return(this.formRender())
            }
            // Else the user is not logged in
            // else{
            //     return(<p>You must be logged in to create a listing</p>)
            // }
        }
    }
}

export default withRouter(ListingForm)