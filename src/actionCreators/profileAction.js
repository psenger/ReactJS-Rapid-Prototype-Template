
import * as actionConstants from "./actionTypes/profile";

export const requestProfile = id => ({
    type: actionConstants.PROFILE_REQUEST,
    value: id
});

export const requestProfileSuccess = message => ({
    type: actionConstants.PROFILE_REQUEST_SUCCESS,
    value: message
});

export const requestProfileFail = message => ({
    type: actionConstants.PROFILE_REQUEST_FAIL,
    value: message
});

export const loadProfile = profile => ({
    type: actionConstants.PROFILE_LOAD,
    value: profile
});

export const updateEmail = email => ({
    type: actionConstants.PROFILE_MODIFY_EMAIL,
    value: email
});

export const updateActivity = isActive => ({
    type: actionConstants.PROFILE_MODIFY_ACTIVE,
    value: isActive
});

export const updateFirstName = first => ({
    type: actionConstants.PROFILE_MODIFY_FIRST_NAME,
    value: {name: {first}}
});

export const updateLastName = last => ({
    type: actionConstants.PROFILE_MODIFY_LAST_NAME,
    value: {name: {last}}
});

export const updateDob = dob => ({
    type: actionConstants.PROFILE_MODIFY_DATE_OF_BIRTH,
    value: dob
});

