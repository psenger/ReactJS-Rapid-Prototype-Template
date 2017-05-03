
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

        describe('PROFILES_LOAD', () => {
            it("should replace array of profiles and blank out the message", () => {
                Object.freeze(initialState);
                expect(reducer(initialState, profileActions.loadProfiles( [ {id:100},{id:200} ] ))).to.deep.equal( { profiles:[ { id: 100 }, { id: 200 } ], message:''}  );
            });
        });

        describe('PROFILES_REQUEST_SUCCESS', () => {
            it("should not tamper with array of profiles and set the message", () => {
                let newState = { profiles:[{id:100}], message:'xxxx'}
                Object.freeze(newState);
                expect(reducer(newState, profileActions.requestProfilesSuccess('Big Fat Error'))).to.deep.equal( { profiles:[{id:100}], message:'Big Fat Error'}  );
            });
        });

        describe('PROFILES_REQUEST_FAIL', () => {
            it("should not tamper with array of profiles and set the message", () => {
                let newState = { profiles:[{id:100}], message:'xxxx'}
                Object.freeze(newState);
                expect(reducer(newState, profileActions.requestProfilesFail('Big Fat Error'))).to.deep.equal( { profiles:[{id:100}], message:'Big Fat Error'}  );
            });
        });
 
    });
});
