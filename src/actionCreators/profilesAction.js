
import ACTIONS from "./actionTypes/index";

/**
 * Lessons Learned:
 *   1.) Never make your action form the data for a reducer in an expected shape. Because this creates tight coupling ( an Anti-Pattern )
 *   2.) Consistence wins, use one convention and stick with it. For example, the action specification does not require a "value:*" but rather "*". This creates deviations and can expand complexity for maintenance and refactoring.
 */

/* exported requestProfiles - this comment exists for eslint to pass */
export const requestProfiles = () => ({
    type: ACTIONS.PROFILES.REQUEST.INITIATE
});
export const loadProfiles = profiles => ({
    type: ACTIONS.PROFILES.REQUEST.LOAD,
    value: profiles
});
export const requestProfilesSuccess = message => ({
    type: ACTIONS.PROFILES.REQUEST.SUCCESS,
    value: message
});
export const requestProfilesFail = message => ({
    type: ACTIONS.PROFILES.REQUEST.FAIL,
    value: message
});


