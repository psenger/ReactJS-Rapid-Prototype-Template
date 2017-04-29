
import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import profilesReducer from './profilesReducer';

export default combineReducers({
    profileReducer,
    profilesReducer
});