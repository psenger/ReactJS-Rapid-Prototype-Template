
import React  from 'react';
import validate from 'validate.js';
import InputText from './inputText';
import { shallow, mount, render } from 'enzyme';

let describe   = require('mocha').describe;
let before     = require('mocha').before;
let after      = require('mocha').after;
let it         = require('mocha').it;
// let assert     = require('assert');
// let should     = require('should');
let chai       = require('chai');
let assert     = require('chai').assert;
let expect     = require('chai').expect;



describe('<InputText/>', () => {
    it('test dirty', () => {
        let context = { foo: true };
        let constraints = {
            'name.first': {
                presence: true
            }
        };
        let options = {
            format: "flat"
        };
        const enzymeWrapper = mount(<InputText
                                        fieldId="firstName"
                                        label="Enter the first name"
                                        help="The first name is required and can be no larger than 20 characters"
                                        placeholder="First Name"
                                        value="AAA"
                                        required={true}
                                        onChange={()=>{ console.log('ok') }}
                                        getModelToValidate={ (value)=>{ return { name: { first: value } }; } }
                                        validator={ (model,dirty)=> {
                                            if ( !dirty ) return "success";
                                            let validationResults = validate(model, constraints, options);
                                            if (validationResults === undefined) {
                                                return "success";
                                            } else {
                                                return "error";
                                            }
                                        }  }
                                    />, { context });

        console.log( enzymeWrapper.debug() );
        // expect( enzymeWrapper.find('components/InputText')  ).to.equal(true);

        expect( enzymeWrapper.state().dirty ).to.equal(false);
        enzymeWrapper.find('input').simulate('change', {target: {value: 'My new value'}});
        expect( enzymeWrapper.state().dirty ).to.equal(true);
        // expect( enzymeWrapper.find('input').simulate  ).to.equal(1);
    })
});

