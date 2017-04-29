
import * as actionConstants from "./actionTypes/profiles";

/* exported requestProfiles - this comment exists for eslint to pass */
export const requestProfiles = () => ({
    type: actionConstants.PROFILES_REQUEST
});
export const requestProfilesSuccess = profiles => ({
    type: actionConstants.PROFILES_REQUEST_SUCCESS,
    value: profiles
});
export const requestProfilesFail = message => ({
    type: actionConstants.PROFILES_REQUEST_FAIL,
    value: message
});


