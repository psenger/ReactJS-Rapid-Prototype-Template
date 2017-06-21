/**
 * Actions are the mechanism you use to communicate with the Dispatcher on the Store.
 *
 * It wraps the data with a type and in this case a value, replicating what we would see in a strongly typed language like Java as an interface.
 *
 * Lessons Learned:
 *   1.) Never make your action form the data for a reducer in an expected shape. Because this creates tight coupling ( an Anti-Pattern )
 *   2.) Consistence wins, use one convention and stick with it. For example, the action specification does not require a "value:*" but rather "*". This creates deviations and can expand complexity for maintenance and refactoring.
 */
import ACTIONS from './actionTypes/index';

/**
 * Request from the server a Profile, singular.
 * @function
 * @param {string|number} id - the id of the person.
 */
export const requestProfile = id => ({
  type: ACTIONS.PROFILE.REQUEST.INITIATE,
  value: id
});

/**
 * The request was success. This is used by a saga, and could be used by a loading mask.
 * @function
 * @param {string} message - a message, usually blank.
 */
export const requestProfileSuccess = message => ({
  type: ACTIONS.PROFILE.REQUEST.SUCCESS,
  value: message
});

/**
 * The request failed. This is used by a saga, and could be used by a loading mask or error message.
 * @function
 * @param {string} message - a message,
 */
export const requestProfileFail = message => ({
  type: ACTIONS.PROFILE.REQUEST.FAIL,
  value: message
});

/**
 * Load the profile into the store. Used by a saga, this loads the profile after requestProfileSuccess into the store.
 * @function
 * @param {*} profile - the profile to store.
 */
export const loadProfile = profile => ({
  type: ACTIONS.PROFILE.REQUEST.LOAD,
  value: profile
});

/**
 * Update the email field on the profile in the store.
 * @function
 * @param {string} email - the email
 */
export const updateEmail = email => ({
  type: ACTIONS.PROFILE.MODIFY.EMAIL,
  value: email
});

/**
 * Update the email field on the profile in the store.
 * @function
 * @param {string} email - the email
 */
export const updateActivity = isActive => ({
  type: ACTIONS.PROFILE.MODIFY.ACTIVE,
  value: isActive
});

/**
 * Update the first name field on the profile in the store.
 * @function
 * @param {string} first - the first name
 */
export const updateFirstName = first => ({
  type: ACTIONS.PROFILE.MODIFY.FIRST_NAME,
  value: first
});

/**
 * Update the last name field on the profile in the store.
 * @param {string} last - the last name
 */
export const updateLastName = last => ({
  type: ACTIONS.PROFILE.MODIFY.LAST_NAME,
  value: last
});

/**
 * Update the date of birth field on the profile in the store.
 * @function
 * @param {string} dob - the date of birth
 */
export const updateDob = dob => ({
  type: ACTIONS.PROFILE.MODIFY.DATE_OF_BIRTH,
  value: dob
});
