import expect from 'expect';
import reducer from './profileReducer';
import * as actionConsts from '../actions/const';

describe('REDUCER: ', () => {

    const initialState = {};

    describe('profileReducer.js', () => {
        it('should return the current state when action type is of unknown', () => {
            expect(
                reducer(initialState, {})
            ).toEqual(
                initialState
            );
        });
        describe('PROFILE_MODIFY_ACTIVE', () => {
            it("adds the value to state", () => {
                Object.freeze(initialState);
                let action = {  type: actionConsts.PROFILE_MODIFY_ACTIVE,
                               value: true
                };
                reducer(initialState,action).expect.to.equal()
            });
        });
    });
});
