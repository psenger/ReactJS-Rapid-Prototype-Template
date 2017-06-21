import reducer from './profileReducer';
import * as profileActions from '../actionCreators/profileAction';

describe('REDUCER: ', () => {

  const initialState = undefined;

  describe('profileReducer.js', () => {

    it('should return the current state when action actionConstants is of unknown', () => {
      expect(reducer(initialState, {})).toEqual({profile: null, message: ''});
    });

    describe('ACTIONS.PROFILE.REQUEST.LOAD', () => {
      it('should change the whole object', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.loadProfile({
          email: 'a@a.com',
          isActive: true
        }))).toEqual({profile: {email: 'a@a.com', isActive: true}, message: ''});
      });
      it('should change the active state to false', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.updateActivity(false))).toEqual({
          profile: {isActive: false},
          message: ''
        });
      });
    });

    describe('ACTIONS.PROFILE.MODIFY.ACTIVE', () => {
      it('should change the active state to true', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.updateActivity(true))).toEqual({
          profile: {isActive: true},
          message: ''
        });
      });
      it('should change the active state to false', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.updateActivity(false))).toEqual({
          profile: {isActive: false},
          message: ''
        });
      });
    });

    describe('ACTIONS.PROFILE.MODIFY.EMAIL', () => {
      it('should add a new email to an otherwise missing value', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.updateEmail('p@p.com'))).toEqual({
          profile: {email: 'p@p.com'},
          message: ''
        });
      });
      it('should change the existing email', () => {
        let oldState = {profile: {email: 'p@p.com'}, message: ''};
        Object.freeze(oldState);
        expect(reducer(oldState, profileActions.updateEmail('a@a.com'))).toEqual({
          profile: {email: 'a@a.com'},
          message: ''
        });
      });
    });

    describe('ACTIONS.PROFILE.MODIFY.FIRST_NAME', () => {
      it('should add a the first name to an otherwise missing value', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.updateFirstName('bob'))).toEqual({
          profile: {name: {first: 'bob'}},
          message: ''
        });
      });
      it('should update the first name of an existing value', () => {
        let oldState = {profile: {name: {first: 'bob', last: 'smith'}, dob: '09/09/2017'}, message: ''};
        Object.freeze(oldState);
        expect(reducer(oldState, profileActions.updateFirstName('larry'))).toEqual({
          profile: {
            name: {
              first: 'larry',
              last: 'smith'
            }, dob: '09/09/2017'
          }, message: ''
        });
      });
    });

    describe('ACTIONS.PROFILE.MODIFY.LAST_NAME', () => {
      it('should add the last name to an otherwise missing value', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.updateLastName('smith'))).toEqual({
          profile: {name: {last: 'smith'}},
          message: ''
        });
      });
      it('should update the last name of an existing value', () => {
        let oldState = {profile: {name: {first: 'bob', last: 'smith'}, dob: '09/09/2017'}, message: ''};
        Object.freeze(oldState);
        expect(reducer(oldState, profileActions.updateLastName('john'))).toEqual({
          profile: {
            name: {
              first: 'bob',
              last: 'john'
            }, dob: '09/09/2017'
          }, message: ''
        });
      });
    });

    describe('ACTIONS.PROFILE.MODIFY.DATE_OF_BIRTH', () => {
      it('should update the DOB to an otherwise missing value', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.updateDob('2016/04/12'))).toEqual({
          profile: {dob: '2016/04/12'},
          message: ''
        });
      });
      it('should update the dob of an existing value', () => {
        let oldState = {profile: {name: {first: 'bob', last: 'smith'}, dob: '2016/04/12'}, message: ''};
        Object.freeze(oldState);
        expect(reducer(oldState, profileActions.updateDob('2017/07/07'))).toEqual({
          profile: {
            name: {
              first: 'bob',
              last: 'smith'
            }, dob: '2017/07/07'
          }, message: ''
        });
      });
    });

    describe('SEQUENCE', () => {
      it('should modify the last name to john, then bob, an change the isActive to true', () => {
        let stateOne = Object.freeze({
          profile: {
            name: {
              first: 'bob',
              last: 'smith'
            },
            isActive: false
          },
          message: ''
        });
        expect(stateOne).toEqual({
          profile: {
            name: {
              first: 'bob',
              last: 'smith'
            },
            isActive: false
          },
          message: ''
        });
        let stateTwo = Object.freeze(reducer(stateOne, profileActions.updateLastName('john')));
        expect(stateTwo).toEqual({
          profile: {
            name: {
              first: 'bob',
              last: 'john'
            },
            isActive: false
          },
          message: ''
        });
        let stateThree = Object.freeze(reducer(stateTwo, profileActions.updateLastName('bob')));
        expect(stateThree).toEqual({
          profile: {
            name: {
              first: 'bob',
              last: 'bob'
            },
            isActive: false
          },
          message: ''
        });
        let stateFour = Object.freeze(reducer(stateThree, profileActions.updateLastName('bob')));
        expect(reducer(stateFour, profileActions.updateActivity(true))).toEqual({
          profile: {
            name: {
              first: 'bob',
              last: 'bob'
            },
            isActive: true
          },
          message: ''
        });
      });
    });

  });
});
