let describe   = require('mocha').describe;
let before     = require('mocha').before;
let after      = require('mocha').after;
let it         = require('mocha').it;
// let assert     = require('assert');
// let should     = require('should');
let chai       = require('chai');
let assert     = require('chai').assert;
let expect     = require('chai').expect;

import reducer from './profileReducer';
import * as profileActions from '../actions/profileAction';

describe('REDUCER: ', () => {

    const initialState = {};

    describe('profileReducer.js', () => {
        it('should return the current state when action actionConsts is of unknown', () => {
            expect(reducer(initialState, {})).to.deep.equal(initialState);
        });
        describe('PROFILE_MODIFY_ACTIVE', () => {
            it("should change the active state to true", () => {
                Object.freeze(initialState);
                expect(reducer(initialState, profileActions.updateActivity(true))).to.deep.equal({ isActive: true });
            });
            it("should change the active state to false", () => {
                Object.freeze(initialState);
                expect(reducer(initialState, profileActions.updateActivity(false))).to.deep.equal({ isActive: false });
            });
        });
        describe('PROFILE_MODIFY_EMAIL', () => {
            it("should add a new email to an otherwise missing value", () => {
                Object.freeze(initialState);
                expect(reducer(initialState,profileActions.updateEmail('p@p.com'))).to.deep.equal({ email: 'p@p.com'});
            });
            it("should change the existing email", () => {
                let oldState = { email: 'p@p.com'};
                Object.freeze(oldState);
                expect(reducer(oldState,profileActions.updateEmail('a@a.com'))).to.deep.equal({ email: 'a@a.com'});
            });
        });
        describe('PROFILE_MODIFY_FIRST_NAME', () => {
            it("should add a the first name to an otherwise missing value", () => {
                Object.freeze(initialState);
                expect(reducer(initialState,profileActions.updateFirstName('bob'))).to.deep.equal({ name: { first: 'bob'} });
            });
            it("should update the first name of an existing value", () => {
                let oldState = { name:  { first: 'bob', last: 'smith' } };
                Object.freeze(oldState);
                expect( reducer(oldState,profileActions.updateFirstName('larry')) ).to.deep.equal( { name: { first: 'larry', last: 'smith' } } );
            });
        });
        describe('PROFILE_MODIFY_LAST_NAME', () => {
            it("should add the last name to an otherwise missing value", () => {
                Object.freeze(initialState);
                expect(reducer(initialState,profileActions.updateLastName('smith'))).to.deep.equal({ name: { last: 'smith'} });
            });
            it("should update the last name of an existing value", () => {
                let oldState = { name:  { first: 'bob', last: 'smith' } };
                Object.freeze(oldState);
                expect( reducer(oldState,profileActions.updateLastName('john')) ).to.deep.equal( { name: { first: 'bob', last: 'john' } } );
            });
        });
 
    });
});
