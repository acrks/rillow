import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  // componentDidUpdate(prevProps) {
  //   if(this.prevProps.formType !== this.props.formType) {
  //     this.props.clearErrors()
  //   }
  // }

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
    this.props.processForm(user).then(this.props.closeModal);
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
              </label>
            </div>
          
          <div className = "label-container">
            <label className = "label-header">Password
              <input required type = "password" value = {this.state.password} onChange = {this.update('password')} placeholder = "Enter password" className = "subheader input-field"/>
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
              {this.renderErrors()}
              <br/>
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
