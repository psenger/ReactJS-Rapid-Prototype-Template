
import * as actionConstants from "./actionTypes/profile";

export const updateProfile = profile => ({
    type: actionConstants.PROFILE_UPDATE,
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

