
let describe   = require('mocha').describe;
let before     = require('mocha').before;
let after      = require('mocha').after;
let it         = require('mocha').it;
// let assert     = require('assert');
// let should     = require('should');
let chai       = require('chai');
let assert     = require('chai').assert;
let expect     = require('chai').expect;

import reducer from './profilesReducer';
import * as profileActions from '../actionCreators/profilesAction';

describe('REDUCER: ', () => {

    const initialState = undefined;

    describe('profilesReducer.js', () => {
        it('should return the current state when action actionConstants is of unknown', () => {
            expect(reducer(initialState, {})).to.deep.equal({profiles: [], message: ''});
        });

        // describe('PROFILES_UPDATE', () => {
        //     it("should replace array of profiles and blank out the message", () => {
        //         Object.freeze(initialState);
        //         expect(reducer(initialState, profileActions.updateProfiles([{id:100},{id:200}]))).to.deep.equal( { profiles:[ { id: 100 }, { id: 200 } ], message:''}  );
        //     });
        // });

        // describe('PROFILES_MESSAGE', () => {
        //     it("should not tamper with array of profiles and set the message", () => {
        //         let newState = Object.assign({}, initialState );
        //         newState.profiles.push({id:100});
        //         Object.freeze(newState);
        //         expect(reducer(newState, profileActions.updateMessage('Big Fat Error'))).to.deep.equal( { profiles:[{id:100}], message:'Big Fat Error'}  );
        //     });
        // });

        // describe('PROFILE_MODIFY_LAST_NAME', () => {
        //     it("should add the last name to an otherwise missing value", () => {
        //         Object.freeze(lockDown);
        //         expect(reducer(lockDown,profileActions.updateLastName('smith'))).to.deep.equal({ name: { last: 'smith'} });
        //     });
        //     it("should update the last name of an existing value", () => {
        //         let oldState = { name:  { first: 'bob', last: 'smith' } };
        //         Object.freeze(oldState);
        //         expect( reducer(oldState,profileActions.updateLastName('john')) ).to.deep.equal( { name: { first: 'bob', last: 'john' } } );
        //     });
        // });
 
    });
});
