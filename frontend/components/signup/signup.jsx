import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
    }

    handleInput(type) {
        try{
            return (e) => (
                this.setState({ [type]: e.currentTarget.value })
                )
            }
            catch(error) {
                console.log(error)
                    this.setState({ error });
                }
        }
        
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createNewUser(user)
        .then(() => this.props.history.push('/'))
    }

    demoLogin() {
        const user = {
            email: 'demo@gmail.com',
            password: 'greatasset'
        }
        this.props.login(user)
        .then(() => this.props.history.push('/'))
    }

    render() {
        return (
            <div className = "session-form">
                <div className = "headline-container">
                <h2 className = "headline">Welcome to Rillow</h2>
                </div>
                <div className = "tabs-container">
                <span className = "subheader tab-header signin">Sign in</span>
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
                    <button onClick ={this.handleSubmit} className = 'sign-in-button'>Sign up</button>
                    <br/>
                    <button onClick = {this.demoLogin} className = 'sign-in-button'>Demo User</button>
                </form>
            </div>
        )
    }
}

export default Signup