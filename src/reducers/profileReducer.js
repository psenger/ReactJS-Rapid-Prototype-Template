
import {merge} from "lodash";
import ACTIONS from "../actionCreators/actionTypes/index";

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

        case ACTIONS.PROFILE.REQUEST.FAIL:
            return merge( {}, state , { message: value } );

        case ACTIONS.PROFILE.REQUEST.LOAD:
            return merge( {}, state , { profile: value } );

        case ACTIONS.PROFILE.MODIFY.ACTIVE:
            return merge( {}, state , { profile: { isActive: value } } );

        case ACTIONS.PROFILE.MODIFY.EMAIL:
            return merge( {}, state , { profile: { email: value } } );

        case ACTIONS.PROFILE.MODIFY.DATE_OF_BIRTH:
            return merge( {}, state , { profile: { dob: value } } );

        case ACTIONS.PROFILE.MODIFY.FIRST_NAME:
            return merge( {}, state , { profile: { name: { first: value } } } );

        case ACTIONS.PROFILE.MODIFY.LAST_NAME:
            return merge( {}, state , { profile: { name: { last: value } } } );

        default:
            return state
    }
}
