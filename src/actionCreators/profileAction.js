import * as actionConstants from "./actions/profile";

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


