import {connect} from 'react-redux'
import { createsNewUser } from '../../actions/session'
import Signup from './signup'

const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createsNewUser(user))
})

export default connect(null, mapDispatchToProps)(Signup)

 