import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then(() => this.props.history.push('/chirps'))
    }

    render() {
        return (
            <div className = "session-form">
                <div className = "headline-container">
                <h2 className = "headline">Welcome to Rillow</h2>
                </div>
                <div className = "tabs-container">
                <span className = "subheader tab-header signin">Sign in</span>
                <span className = "subheader tab-header newaccount">New Account</span>
                </div>
                <form>
                    <div className = "label-container">
                    <label className = "label-header">Email
                    <br/>
                        <input type = "text" value = {this.state.email} onChange = {this.handleInput('email')} placeholder = "Enter email" className = "subheader input-field"/>
                    </label>
                    </div>
                    <div className = "label-container">
                    <label className = "label-header">Password
                        <input type = "password" value = {this.state.password} onChange = {this.handleInput('password')} placeholder = "Enter password" className = "subheader input-field"/>
                    </label>
                    <br/>
                    <br/>
                    </div>
                    <button onClick ={this.handleSubmit} className = 'sign-in-button'>Sign in</button>
                </form>
            </div>
        )
    }
}

export default Signup