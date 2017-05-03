
import * as actionConstants from "./actionTypes/profiles";

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


