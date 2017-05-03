
import moment from 'moment';
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

validate.extend(validate.validators.datetime, {
    // The value is guaranteed not to be null or undefined but otherwise it could be anything. needs to be UTC Unix Timestamp (milliseconds)
    parse: function(value) {
        return moment.utc(value).valueOf();
    },
    // Input is a utc unix timestamp. this example only assumes the format is the date part of a ISO 8601
    format: function(value) {
        return moment.utc().unix(value).format("YYYY-MM-DD");
    }
});

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
    },
    'dob': {
        datetime: {
            dateOnly: true
        }
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
                                    getModelToValidate={ (value)=>{ return {name:{first:value}}; } }
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
                                    getModelToValidate={ (value)=>{ return {name:{last:value}}; } }
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
                                    getModelToValidate={ (email)=>{ return {email}; } }
                                    validator={this.createValidator( [ 'email' ], constraints, options, this ) }
                                />
                                <DateFields
                                    fieldId="dob"
                                    label="Enter the Date of Birth"
                                    help="The Date of Birth is required"
                                    placeholder="dob"
                                    value={this.props.dob}
                                    day={this.props.day}
                                    month={this.props.month}
                                    year={this.props.year}
                                    onChange={this.createOnChange(this.props.profileActionDispatcher.updateDob)}
                                    getModelToValidate={ (dob)=>{ return { dob:dob }; } }
                                    validator={this.createValidator( [ 'dob' ], constraints, options, this ) }
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

// needed to allow specific context to be brought down.
UserProfile.contextTypes = {
    theme: PropTypes.object.isRequired
};

let mapStateToProps = (state) => {

    let def = moment(new Date()).format("YYYY-MM-DD");

    return {
        profileReducer: state.profileReducer,
        name: state.profileReducer.name,
        email: state.profileReducer.email,
        dob: state.profileReducer.dob,
        year: Number( (state.profileReducer.dob||def).split('-')[0] ),
        month: Number( (state.profileReducer.dob||def).split('-')[1] ),
        day: Number( (state.profileReducer.dob||def).split('-')[2] )
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        profileActionDispatcher: bindActionCreators(ProfileAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
