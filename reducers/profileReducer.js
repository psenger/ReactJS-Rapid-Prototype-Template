import * as actionConst from '../actions/const';

let initialState = [];

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionConst.PROFILE_MODIFY_ACTIVE:
            return Object.assign({}, state, {isActive: action.value});
        case actionConst.PROFILE_MODIFY_EMAIL:
            return Object.assign({}, state, {email: action.value});
        default:
            return state
    }
}