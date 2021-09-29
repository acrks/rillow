import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
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

  demoLogin() {
    const user = {
        email: 'demo@gmail.com',
        password: 'greatasset'
    }
    this.props.login(user)
    .then(this.props.closeModal)
    .then(() => this.props.history.push('/'))
}

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let message = "";
    if(this.props.formType === 'signup' ? message = "New Account" : message = "Sign in")
    return (
      <div className = "session-form">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <div className = "headline-container">
          <h2 className = "headline">Welcome to Rillow</h2>
        </div>
        <div className = "tabs-container">
          <span className = "subheader tab-header signin">{message}</span>
        </div>
      <form>
          <div className = "label-container">
            <label className = "label-header">Email
              <br/>
                <input type = "text" value = {this.state.email} onChange = {this.update('email')} placeholder = "Enter email" className = "subheader input-field"/>
              </label>
            </div>
          
          <div className = "label-container">
            <label className = "label-header">Password
              <input type = "password" value = {this.state.password} onChange = {this.update('password')} placeholder = "Enter password" className = "subheader input-field"/>
              </label>
              {this.renderErrors()}
              <br/>
              <br/>
          </div>

          {this.props.formType === 'signup' ? 
          <button onClick ={this.handleSubmit} className = 'sign-in-button'>Submit</button>
          :
          <button onClick ={this.handleSubmit} className = 'sign-in-button'>Sign in</button>}          
          <br/>
          <button onClick = {this.demoLogin} className = 'sign-in-button'>Demo User</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
