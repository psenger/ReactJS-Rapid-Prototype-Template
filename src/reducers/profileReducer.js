
import {merge} from "lodash";
import * as actionConst from "../actionCreators/actionTypes/profile";

let initialState = { profile: null, message: '' };

/**
 * When you use immutable, it locks down the state, by wrapping the object
 * with mutable functions that track the state change, returning the new
 * state of the object.
 *    Consequently Object.assign will destroy the immutable object.
 *    Therefore, .......
 *
 * Lessons Learned:
 *   1.) No need for immutable.js. Good programming and testing can replace this functionality.
 *   2.) Normalizr looks really good, it is a water shed of good ideas. However, wrapping and unwrapping the data or even re-working the services and apis requires work.
 *   3.) Keep Payload manipulation here... close to the code.
 */

export default function profileReducer(state = initialState, action) {
    let value = action.value;

    switch (action.type) {

        case actionConst.PROFILE_REQUEST_FAIL:
            return merge( {}, state , { message: value } );

        case actionConst.PROFILE_LOAD:
            return merge( {}, state , { profile: value } );

        case actionConst.PROFILE_MODIFY_ACTIVE:
            return merge( {}, state , { profile: { isActive: value } } );

        case actionConst.PROFILE_MODIFY_EMAIL:
            return merge( {}, state , { profile: { email: value } } );

        case actionConst.PROFILE_MODIFY_DATE_OF_BIRTH:
            return merge( {}, state , { profile: { dob: value } } );

        case actionConst.PROFILE_MODIFY_FIRST_NAME:
            return merge( {}, state , { profile: { name: { first: value } } } );

        case actionConst.PROFILE_MODIFY_LAST_NAME:
            return merge( {}, state , { profile: { name: { last: value } } } );

        default:
            return state
    }
}
