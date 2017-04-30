

import {safeGet}from '../../utils';
import PropTypes from "prop-types";
import validate from 'validate.js';
import {connect} from "react-redux";
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import Form from "../../components/form";
import {fetchProfile} from "../../services/api";
import InputText from '../../components/inputText';
import {Button, ProgressBar} from "react-bootstrap";
import DateFields from "../../components/dateFields";
import * as ProfileAction from "../../actionCreators/profileAction";

const delayPromise = (ms) => {
    return (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, ms);
        })
    };
};

//  http://validatejs.org/
let constraints = {
    'name.first': {
        presence: true,
        length: {max: 20},
    },
    'name.last': {
        length: {min: 4},
    },
    'email': {
        presence: true,
        email: true
    }
};

let options = {
    format: "flat"
};

export class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/UserProfile';
        this.onSubmit = this.onSubmit.bind(this);
        this.createOnChange = this.createOnChange.bind(this);
        this.createValidator = this.createValidator.bind(this);
    }

    componentWillMount() {
        /**
         * Test to see if there is an id in the url, if so, load the record.
         */
        if ( this.props.match && this.props.match.params && this.props.match.params.id ) this.load( this.props.match.params.id )
    }

    load(id) {
        this.setState({loading: true},
            () => {
                fetchProfile(id)
                    .then(delayPromise(1000))
                    .then((data) => {
                        return this.props.profileActionDispatcher.updateProfile(data);
                    })
                    .then(() => {
                        this.setState({loading: false})
                    });
            }
        )

    }

    onSubmit() {
        // @todo PAS working on validation here.
        // if ( createValidator('*') !== 'success' )
        // console.log('onSubmit', this.props.profileAction.updateEmail('xxxxx') );
        console.log('onSubmit');
       // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
    }

    createOnChange(fn) {
       return function(e){
           fn(e.target.value);
       }
    }

    // The function _validator_ fires every time the render is called on InputText...
    //    Which only happens when props are changed.
    createValidator(relatedModelConstraintPaths, constraints, validatorOptions, scope) {

        // Build a cut down copy of the constraints
        let _constraints = {};
        relatedModelConstraintPaths.forEach(function (cv) {
            _constraints[cv] = safeGet(constraints, cv, null);
        });

        // What I would like to see is how to get these messages into some model
        return function (model) {
            // validation results will be an array of strings with messages if it fails. undefined if it passes.
            let validationResults = validate(model, _constraints, validatorOptions);
            if (validationResults === undefined) {
                return "success";
            } else {
                return "error";
            }
        }.bind(scope);
    }


    render() {
        return (
            <section>
                <h1>Profile Edit</h1>
                <Form>
                    {(this.state.loading) ?
                        (
                            <ProgressBar now={10} label="10" srOnly/>
                        ):(
                            <div>
                                <InputText
                                    fieldId="firstName"
                                    label="Enter the first name"
                                    help="The first name is required and can be no larger than 20 characters"
                                    placeholder="First Name"
                                    value={this.props.name.first}
                                    required={true}
                                    onChange={this.createOnChange(this.props.profileActionDispatcher.updateFirstName)}
                                    getValidationModel={ (value)=>{ return {name:{first:value}}; } }
                                    validator={ this.createValidator( [ 'name.first' ], constraints, options, this ) }
                                />
                                <InputText
                                    fieldId="lastName"
                                    label="Enter the last name"
                                    help="The last name is required and can be no larger than 20 characters"
                                    placeholder="Last Name"
                                    value={this.props.name.last}
                                    required={false}
                                    onChange={this.createOnChange(this.props.profileActionDispatcher.updateLastName)}
                                    getValidationModel={ (value)=>{ return {name:{last:value}}; } }
                                    validator={this.createValidator( [ 'name.last' ], constraints, options, this ) }
                                />
                               <InputText
                                    fieldId="email"
                                    label="Enter the email"
                                    help="The email is required and must be a valid format"
                                    placeholder="Email"
                                    value={this.props.email}
                                    required={true}
                                    onChange={this.createOnChange(this.props.profileActionDispatcher.updateEmail)}
                                    getValidationModel={ (email)=>{ return {email}; } }
                                    validator={this.createValidator( [ 'email' ], constraints, options, this ) }
                                />
                                <DateFields
                                    fieldId="dob"
                                    label="Enter the Date of Birth"
                                    help="The Date of Birth is required"
                                    placeholder="dob"
                                    value={this.props.dob}
                                    onChange={this.createOnChange(this.props.profileActionDispatcher.dob)}
                                />
                                <Button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</Button>
                            </div>
                        )
                    }
                </Form>
            </section>
        );
    }
}

// Use props to create warnings in the console if they are missing.
UserProfile.propTypes = {
    profileReducer: PropTypes.object.isRequired
};

let mapStateToProps = (state /** , ownProps **/) => {
    return {
        profileReducer: state.profileReducer,
        name: state.profileReducer.name,
        email: state.profileReducer.email,
        dob: state.profileReducer.dob
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        profileActionDispatcher: bindActionCreators(ProfileAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
