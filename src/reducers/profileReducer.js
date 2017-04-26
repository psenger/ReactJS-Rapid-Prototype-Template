
import * as actionConst from "../actionCreators/actionTypes/profile";

let initialState = { };

export function safeGet(obj, key, defaultVal) {
    if ((obj === undefined) || (obj === null)) return defaultVal;
    if (typeof obj[key] !== 'undefined') return obj[key];
    return key.split('.').reduce(function(o, x) {
        return (typeof o === 'undefined' || o === null) ? ((typeof defaultVal !== 'undefined') ? defaultVal : o) : o[x];
    }, obj);
}
function modifyPath ( state, action, path ) {
    let name = Object.assign({}, safeGet(state,path), safeGet(action,path));
    return Object.assign({}, state, { name } );
}
export default function profileReducer(state = initialState, action) {
    let value = action.value;
    switch (action.type) {
        case actionConst.PROFILE_UPDATE:
            return Object.assign({}, state, value);
        case actionConst.PROFILE_MODIFY_ACTIVE:
            // return modifyPath( state, {isActive: value}, 'isActive' );
            return Object.assign({}, state, {isActive: value});
        case actionConst.PROFILE_MODIFY_EMAIL:
            // return modifyPath( state,  {email: value}, 'email' );
            return Object.assign({}, state, {email: value});
        case actionConst.PROFILE_MODIFY_FIRST_NAME:
            return modifyPath( state, value, 'name' );
        case actionConst.PROFILE_MODIFY_LAST_NAME:
            return modifyPath( state, value, 'name' );
        default:
            return state
    }
}