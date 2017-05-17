
import ACTIONS from "./actionTypes/index";

/**
 * Lessons Learned:
 *   1.) Never make your action form the data for a reducer in an expected shape. Because this creates tight coupling ( an Anti-Pattern )
 *   2.) Consistence wins, use one convention and stick with it. For example, the action specification does not require a "value:*" but rather "*". This creates deviations and can expand complexity for maintenance and refactoring.
 */


export const requestProfile = id => ({
    type: ACTIONS.PROFILE.REQUEST.INITIATE,
    value: id
});

export const requestProfileSuccess = message => ({
    type: ACTIONS.PROFILE.REQUEST.SUCCESS,
    value: message
});

export const requestProfileFail = message => ({
    type: ACTIONS.PROFILE.REQUEST.FAIL,
    value: message
});

export const loadProfile = profile => ({
    type: ACTIONS.PROFILE.REQUEST.LOAD,
    value: profile
});

export const updateEmail = email => ({
    type: ACTIONS.PROFILE.MODIFY.EMAIL,
    value: email
});

export const updateActivity = isActive => ({
    type: ACTIONS.PROFILE.MODIFY.ACTIVE,
    value: isActive
});

export const updateFirstName = first => ({
    type: ACTIONS.PROFILE.MODIFY.FIRST_NAME,
    value: first
});

export const updateLastName = last => ({
    type: ACTIONS.PROFILE.MODIFY.LAST_NAME,
    value: last
});

export const updateDob = dob => ({
    type: ACTIONS.PROFILE.MODIFY.DATE_OF_BIRTH,
    value: dob
});

