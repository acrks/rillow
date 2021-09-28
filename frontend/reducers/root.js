import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer'

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer
});
