/**
 * Actions are the mechanism you use to communicate with the Dispatcher on the Store.
 *
 * It wraps the data with a type and in this case a value, replicating what we would see in a strongly typed language like Java as an interface.
 *
 * Lessons Learned:
 *   1.) Never make your action form the data for a reducer in an expected shape. Because this creates tight coupling ( an Anti-Pattern )
 *   2.) Consistence wins, use one convention and stick with it. For example, the action specification does not require a "value:*" but rather "*". This creates deviations and can expand complexity for maintenance and refactoring.
 */

import ACTIONS from "./actionTypes/index";

/**
 * Request from the server all the Profiles, multiple.
 * @function
 */
export const requestProfiles = () => ({
  type: ACTIONS.PROFILES.REQUEST.INITIATE
});

/**
 * Load the profiles into the store. Used by a saga, this loads the profiles after requestProfilesSuccess into the store.
 * @function
 * @param {[*]} profiles - the profiles to store.
 */
export const loadProfiles = profiles => ({
  type: ACTIONS.PROFILES.REQUEST.LOAD,
  value: profiles
});

/**
 * The request was success. This is used by a saga, and could be used by a loading mask.
 * @function
 * @param {string} message - a message, usually blank.
 */
export const requestProfilesSuccess = message => ({
  type: ACTIONS.PROFILES.REQUEST.SUCCESS,
  value: message
});

/**
 * The request failed. This is used by a saga, and could be used by a loading mask or error message.
 * @function
 * @param {string} message - a message,
 */
export const requestProfilesFail = message => ({
  type: ACTIONS.PROFILES.REQUEST.FAIL,
  value: message
});


