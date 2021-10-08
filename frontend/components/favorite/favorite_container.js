import {connect} from 'react-redux'
import Favorite from './favorite'
import { createFavorite } from '../../actions/favorite_actions'

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    favorites: state.entities.favorites
})

const mapDispatchToProps = dispatch => ({
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)