import * as actionConst from "../actionCreators/actionTypes/profile";
import {safeGet,safeSet} from "../utils";

let initialState = { profile: null, message: '' };

function modifyPath(state, action, path) {
    let name = Object.assign({}, safeGet(state.profile, path, {}), safeGet(action, path));
    let profile = Object.assign({}, state.profile, {name});
    return Object.assign({}, state, {profile});
}

export default function profileReducer(state = initialState, action) {
    let value = action.value;
    // if ( state === null ) state = initialState;
    switch (action.type) {

        case actionConst.PROFILE_REQUEST_FAIL:
            return Object.assign( {}, state, { message: value });

        case actionConst.PROFILE_LOAD:
            return Object.assign( {}, state, { profile: value } );

        case actionConst.PROFILE_MODIFY_ACTIVE:
            return Object.assign( {}, state, { profile: { isActive: value } } );

        case actionConst.PROFILE_MODIFY_EMAIL:
            return Object.assign( {}, state, { profile: { email: value } } );

        case actionConst.PROFILE_MODIFY_DATE_OF_BIRTH:
            return Object.assign( {}, state, { profile: { dob: value } } );

        case actionConst.PROFILE_MODIFY_FIRST_NAME:
            return modifyPath( state, value, 'name' );

        case actionConst.PROFILE_MODIFY_LAST_NAME:
            return modifyPath( state, value, 'name' );

        default:
            return state
    }
}