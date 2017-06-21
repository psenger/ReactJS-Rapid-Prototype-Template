import reducer from './profilesReducer';
import * as profileActions from '../actionCreators/profilesAction';

describe('REDUCER: ', () => {

  const initialState = undefined;

  describe('profilesReducer.js', () => {
    it('should return the current state when action actionConstants is of unknown', () => {
      expect(reducer(initialState, {})).toEqual({profiles: [], message: ''});
    });

    describe('ACTIONS.PROFILES.REQUEST.LOAD', () => {
      it('should replace array of profiles and blank out the message', () => {
        Object.freeze(initialState);
        expect(reducer(initialState, profileActions.loadProfiles([{id: 100}, {id: 200}]))).toEqual({
          profiles: [{id: 100}, {id: 200}],
          message: ''
        });
      });
    });

    describe('ACTIONS.PROFILES.REQUEST.SUCCESS', () => {
      it('should not tamper with array of profiles and set the message', () => {
        let newState = {profiles: [{id: 100}], message: 'xxxx'};
        Object.freeze(newState);
        expect(reducer(newState, profileActions.requestProfilesSuccess('Big Fat Error'))).toEqual({
          profiles: [{id: 100}],
          message: 'Big Fat Error'
        });
      });
    });

    describe('ACTIONS.PROFILES.REQUEST.FAIL', () => {
      it('should not tamper with array of profiles and set the message', () => {
        let newState = {profiles: [{id: 100}], message: 'xxxx'};
        Object.freeze(newState);
        expect(reducer(newState, profileActions.requestProfilesFail('Big Fat Error'))).toEqual({
          profiles: [{id: 100}],
          message: 'Big Fat Error'
        });
      });
    });

  });
});
