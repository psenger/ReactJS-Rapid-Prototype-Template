/**
 *
 * Action Types are Constants that are used to identify action on data in the store or side effects like loading data
 * with sagas.
 *
 * If you see videos or projects on Github normally you will see a set of flat constants. I saw someone doing this,
 * and I like it because it shows relationships.
 *
 * @type {{PROFILE: {REQUEST: {INITIATE: string, LOAD: string, SUCCESS: string, FAIL: string}, MODIFY: {ACTIVE: string, EMAIL: string, FIRST_NAME: string, LAST_NAME: string, DATE_OF_BIRTH: string}}, PROFILES: {REQUEST: {INITIATE: string, LOAD: string, SUCCESS: string, FAIL: string}}}}
 */
const ACTIONS = {
  PROFILE: {
    REQUEST: {
      INITIATE: 'profile.request.initiate',
      LOAD: 'profile.request.load',
      SUCCESS: 'profile.request.success',
      FAIL: 'profile.request.fail'
    },
    MODIFY: {
      ACTIVE: 'profile.modify.active',
      EMAIL: 'profile.modify.email',
      FIRST_NAME: 'profile.modify.name.first',
      LAST_NAME: 'profile.modify.name.last',
      DATE_OF_BIRTH: 'profile.modify.dob'
    }
  },
  PROFILES: {
    REQUEST: {
      INITIATE: 'profiles.request.initiate',
      LOAD: 'profiles.request.load',
      SUCCESS: 'profiles.request.success',
      FAIL: 'profiles.request.fail'
    }
  }
};

export { ACTIONS as default };

