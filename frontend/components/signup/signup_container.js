import {connect} from 'react-redux'
import { createsNewUser, login } from '../../actions/session'
import Signup from './signup'

const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createsNewUser(user)),
    login: formUser => dispatch(login(formUser))
})

export default connect(null, mapDispatchToProps)(Signup)

 