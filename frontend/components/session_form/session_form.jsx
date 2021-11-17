import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.clearErrors()
    
      this.props.processForm(user).then(this.props.closeModal)
    // else {
    //   this.setState({errors:this.props.errors})
    // }
    
    
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
        email: 'demo@gmail.com',
        password: 'greatasset'
    }
    this.props.login(user)
    .then(this.props.closeModal)
}

  renderErrors() {
    if(this.props.errors.length) {
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
  }

  render() {
    let currentTab = ""
    if(this.props.formType === 'login') {
      currentTab = <button className = "subheader tab-header tab-header-selected change-modal-tab">Sign in</button>
    }
    else {
      currentTab = <button className = "subheader tab-header tab-header-selected change-modal-tab">New account</button>
    }

    let emailErrorLabel,
    passwordErrorLabel = <label></label>

    let errorsArr = Object.values(this.props.errors)

    if (errorsArr.length) {
        errorsArr.forEach(error => {
          if (error === 'Email can\'t be blank') {
            emailErrorLabel = <label className="error-message">An email address is required</label>
          }
          if (error === 'Email is invalid') {
            emailErrorLabel = <label className="error-message">The email address you entered has an invalid format</label>
          }
          if (error === 'Email has already been taken') {
            emailErrorLabel = <label className="error-message">There is already an account with that email address</label>
        }
        
        if (error === 'Password is too short (minimum is 8 characters)') {
            passwordErrorLabel = <label className="error-message">Your email address must be at least eight characters long</label>
        }
      })
    }
  

    return (
      <div className = "session-form">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <div className = "headline-container">
          <h2 className = "headline">Welcome to Rillow</h2>
        </div>
        {/* Consider changing to button */}
        <div className = "tabs-container">
          {this.props.formType !== 'signup' ? 
          <>
          {currentTab}
          {this.props.otherForm}
          </>
          :
          <>
          {this.props.otherForm}
          {currentTab}
          </>}
        </div>
      <form>
          <div className = "label-container">
            <label className = "label-header">Email
              <br/>
                <input required type = "text" value = {this.state.email} onChange = {this.update('email')} placeholder = "Enter email" className = "subheader input-field"/>
                {emailErrorLabel}
              </label>
            </div>
          
          <div className = "label-container">
            <label className = "label-header">Password
              <input required type = "password" value = {this.state.password} onChange = {this.update('password')} placeholder = "Enter password" className = "subheader input-field"/>
                {passwordErrorLabel}
              </label>
          </div>
            {this.props.formType === 'signup' ? 
            <><div className = "label-container">
            <label className = "label-header">First name (not required)
              <input type = "text" value = {this.state.firstName} onChange = {this.update('firstName')} placeholder = "Enter first name" className = "subheader input-field"/>
              </label>
          </div>
                    <div className = "label-container">
            <label className = "label-header">Last name (not required)
              <input type = "text" value = {this.state.lastName} onChange = {this.update('lastName')} placeholder = "Enter last name" className = "subheader input-field"/>
              </label>
          </div>
          </>
            : 
            null}
            {this.props.formType === 'login' ? this.renderErrors() : null}
              {/* {this.renderErrors()} */}
              <br/>

          {this.props.formType === 'signup' ? 
          <button onClick ={this.handleSubmit} className = 'sign-in-button'>Submit</button>
          :
          <button onClick ={this.handleSubmit} className = 'sign-in-button'>Sign in</button>}          <br/>
          <button onClick = {this.demoLogin} className = 'sign-in-button'>Demo User</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
