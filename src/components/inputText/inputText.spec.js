import React from 'react';
import validate from 'validate.js';
import InputText from './inputText';
import { mount } from 'enzyme';

// let describe = require('mocha').describe;
// let it = require('mocha').it;
// let expect = require('chai').expect;

describe('<InputText/>', () => {
  it('should toggle the dirty flag', () => {
    let context = {foo: true};
    let constraints = {
      'name.first': {
        presence: true
      }
    };
    let options = {
      format: 'flat'
    };
    const enzymeWrapper = mount(<InputText
      fieldId="firstName"
      label="Enter the first name"
      help="The first name is required and can be no larger than 20 characters"
      placeholder="First Name"
      value="AAA"
      required={true}
      onChange={() => { console.log('ok'); }}
      getModelToValidate={ (value) => { return {name: {first: value}}; } }
      validator={ (model, dirty) => {
        if (!dirty) return 'success';
        let validationResults = validate(model, constraints, options);
        if (validationResults === undefined) {
          return 'success';
        } else {
          return 'error';
        }
      }  }
    />, {context});
    // console.log( enzymeWrapper.debug() );
    expect(enzymeWrapper.state().dirty).toEqual(false);
    enzymeWrapper.find('input').simulate('change', {target: {value: 'My new value'}});
    expect(enzymeWrapper.state().dirty).toEqual(true);
  });
  it('should have an aria-invalid set to true', () => {
    let context = {foo: true};
    let constraints = {
      'name.first': {
        presence: true
      }
    };
    let options = {
      format: 'flat'
    };
    const enzymeWrapper = mount(<InputText
      fieldId="firstName"
      label="Enter the first name"
      help="The first name is required and can be no larger than 20 characters"
      placeholder="First Name"
      value="abcdefghijklmnop"
      required={true}
      onChange={() => { return null; }}
      getModelToValidate={ (value) => { return {name: {first: value}}; } }
      validator={ (model, dirty) => {
        return 'error';
      }  }
    />, {context});
    enzymeWrapper.find('input').simulate('change', {target: {value: ''}});
    // console.log( enzymeWrapper.find('input').html() );
    // console.log( enzymeWrapper.find('input').html().indexOf('aria-invalid="true"') )
    expect( enzymeWrapper.find('input').html().indexOf('aria-invalid="true"') ).not.toBe(-1);
  });
});

