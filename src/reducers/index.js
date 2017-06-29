import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import profilesReducer from './profilesReducer';
import buttonBarsReducer from './buttonBarsReducer';

export default combineReducers({
  profileReducer,
  profilesReducer,
  buttonBarsReducer
});
