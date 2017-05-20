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
    PROFILES : {
      REQUEST: {
        INITIATE: 'profiles.request.initiate',
        LOAD: 'profiles.request.load',
        SUCCESS: 'profiles.request.success',
        FAIL: 'profiles.request.fail'
      },
    }
  };

export {ACTIONS as default};

