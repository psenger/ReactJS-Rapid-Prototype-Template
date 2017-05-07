
import * as actionConstants from "./actionTypes/profile";

/**
 * Lessons Learned:
 *   1.) Never make your action form the data for a reducer in an expected shape. Because this creates tight coupling ( an Anti-Pattern )
 *   2.) Consistence wins, use one convention and stick with it. For example, the action specification does not require a "value:*" but rather "*". This creates deviations and can expand complexity for maintenance and refactoring.
 */


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
    value: first
});

export const updateLastName = last => ({
    type: actionConstants.PROFILE_MODIFY_LAST_NAME,
    value: last
});

export const updateDob = dob => ({
    type: actionConstants.PROFILE_MODIFY_DATE_OF_BIRTH,
    value: dob
});

