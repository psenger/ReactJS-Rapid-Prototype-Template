
import PropTypes from "prop-types";
import {connect} from "react-redux";
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import Form from "../../components/form";
import InputText from '../../components/inputText';
import {fetchProfile} from "../../services/api";
import * as ProfileAction from "../../actionCreators/profileAction";
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock, ProgressBar} from "react-bootstrap";
import validate from 'validate.js';

const delayPromise = (ms) => {
    return (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, ms);
        })
    };
};

const safeGet = (obj, key, defaultVal) => {
    if ((obj === undefined) || (obj === null)) return defaultVal;
    if (typeof obj[key] !== 'undefined') return obj[key];
    return key.split('.').reduce(function (o, x) {
        return (typeof o === 'undefined' || o === null) ? ((typeof defaultVal !== 'undefined') ? defaultVal : o) : o[x];
    }, obj);
};

const safeSet = (obj, key, value) => {
    if (!obj || !key)
        return Object.assign({},obj); // bail out there is no object or no key.

    let properties = key.split(".") || [];

    let curObj = Object.assign({},obj);
    let ptr = curObj;

    const mapper = ( cv, ind, ar ) => {
        if ( !ptr[cv] ) {
            ptr[cv] = {};// initialize the object literal if there is no value in place.
        }
        if ( ar.length -1 === ind ) {
            ptr[cv] = value; // at the end.
        } else {
            ptr = ptr[cv]; // move the pointer down.
        }
    };
    properties.map( mapper );

    return curObj;
};

//  http://validatejs.org/
let constraints = {
    'name.first': {
        presence: true,
        length: {max: 20},
    },
    'name.last': {
        presence: true,
        length: {max: 20},
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
        relatedModelConstraintPaths.map(function (cv, ind, ar) {
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
                                    onChange={this.createOnChange(this.props.profileActionDispatcher.updateEmail)}
                                    getValidationModel={ (email)=>{ return {email}; } }
                                    validator={this.createValidator( [ 'email' ], constraints, options, this ) }
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
        email: state.profileReducer.email
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        profileActionDispatcher: bindActionCreators(ProfileAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
