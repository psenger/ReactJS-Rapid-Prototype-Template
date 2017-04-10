/**
 * Created by psenger on 4/11/17.
 */
import * as type from './const';

export const updateEmail = email => ({
    type: type.PROFILE_MODIFY_EMAIL,
    email
});

export const updateActivity = activity => ({
    type: type.PROFILE_MODIFY_ACTIVE,
    activity
});

