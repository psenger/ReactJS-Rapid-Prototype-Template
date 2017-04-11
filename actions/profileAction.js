/**
 * Created by psenger on 4/11/17.
 */
import * as actionConsts from './const';

export const updateEmail = email => ({
    type: actionConsts.PROFILE_MODIFY_EMAIL,
    email
});

export const updateActivity = isActive => ({
    type: actionConsts.PROFILE_MODIFY_ACTIVE,
    isActive
});

export const updateFirstName = first =>({
    type: actionConsts.PROFILE_MODIFY_FIRST_NAME,
    name: { first }
});

export const updateLastName = last =>({
    type: actionConsts.PROFILE_MODIFY_LAST_NAME,
    name: { last }
});


