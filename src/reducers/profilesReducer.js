
import * as actionConst from "../actionCreators/actionTypes/profiles";

/**
 * When you use immutable, it locks down the state, by wrapping the object
 * with mutable functions that track the state change, returning the new
 * state of the object.
 *    Consequently Object.assign will destroy the immutable object.
 *    Therefore, .......
 */
// let initialState = fromJS({profiles: [], message: ''});
let initialState = {profiles: [], message: ''};

export default function profilesReducer(state = initialState, action) {
    let value = action.value;


    switch (action.type) {
        case actionConst.PROFILES_LOAD:
            return Object.assign({}, state, { profiles: value });
        case actionConst.PROFILES_REQUEST_SUCCESS:
            return Object.assign({}, state, { message: value });
        case actionConst.PROFILES_REQUEST_FAIL:
            return Object.assign({}, state, { message: value });
        default:
            return state
    }
}