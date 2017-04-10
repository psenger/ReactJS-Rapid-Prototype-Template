import * as actionConst from '../actions/const';
import { fromJS } from 'immutable';

let initialState = fromJS({});

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case actionConst.PROFILE_MODIFY_ACTIVE:
            return Object.assign({}, state, {isActive: action.value});
        case actionConst.PROFILE_MODIFY_EMAIL:
            return Object.assign({}, state, {email: action.value});
        default:
            return state
    }
}
export default profileReducer;