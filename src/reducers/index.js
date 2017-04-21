/**
 * Created by psenger on 3/29/17.
 */
import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import profilesReducer from './profilesReducer';

export default combineReducers({
    profileReducer,
    profilesReducer
});