
import * as actionConstants from "./actionTypes/profiles";

/**
 * Lessons Learned:
 *   1.) Never make your action form the data for a reducer in an expected shape. Because this creates tight coupling ( an Anti-Pattern )
 *   2.) Consistence wins, use one convention and stick with it. For example, the action specification does not require a "value:*" but rather "*". This creates deviations and can expand complexity for maintenance and refactoring.
 */

/* exported requestProfiles - this comment exists for eslint to pass */
export const requestProfiles = () => ({
    type: actionConstants.PROFILES_REQUEST
});
export const loadProfiles = profiles => ({
    type: actionConstants.PROFILES_LOAD,
    value: profiles
});
export const requestProfilesSuccess = message => ({
    type: actionConstants.PROFILES_REQUEST_SUCCESS,
    value: message
});
export const requestProfilesFail = message => ({
    type: actionConstants.PROFILES_REQUEST_FAIL,
    value: message
});


