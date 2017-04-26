import PropTypes from "prop-types";
import {connect} from "react-redux";
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import Form from "../../components/form";
import InputText from '../../components/inputText';
import {fetchProfile} from "../../services/api";
import * as ProfileAction from "../../actionCreators/profileAction";
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock, ProgressBar} from "react-bootstrap";

const delayPromise = (ms) => {
    return (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, ms);
        })
    };
};

const firstNameValidate = () => {
    if ( this.props.name.first !== '' && this.props.name.first.length <= 20 ) return 'success';
    return 'error';
};
const lastNameValidate = () => {
    if ( this.props.name.last !== '' && this.props.name.last.length <= 20 ) return 'success';
    return 'error';
};
const emailValidate = () => {
    let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if ( this.props.email !== '' && re.test(this.props.email) ) return 'success';
    return 'error';
};

export class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/UserProfile';
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onValidate = this.onValidate.bind(this);
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
        // if ( onValidate('*') !== 'success' )
        // console.log('onSubmit', this.props.profileAction.updateEmail('xxxxx') );
        console.log('onSubmit');
       // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
    }

    onChange(fn) {
       return function(e){
           fn(e.target.value);
       }
    }

    // _validator_ fires every time the render is called on InputText...
    //    Which only happens when props are changed.
    onValidate(name){
        // valid values are ["success","warning","error",null]

        let validateFn = [];

        if ( name === 'name.first' || name === '*' ) {
            validateFn.push(firstNameValidate);
        }
        if ( name === 'name.last' || name === '*' ) {
            validateFn.push(lastNameValidate);
        }
        if ( name === 'email' || name === '*' ) {
            validateFn.push(emailValidate);
        }

        // this function being returned will execute every
        // time the render is called. which happens when a
        // property is updated.
        return function() {
            return ( validateFn.map( (fn)=>fn() ).includes('error') ) ? 'error' : 'success';
        }.bind(this);
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
                                    onChange={this.onChange(this.props.profileActionDispatcher.updateFirstName)}
                                    validator={this.onValidate('name.first')}
                                />
                                <InputText
                                    fieldId="lastName"
                                    label="Enter the last name"
                                    help="The last name is required and can be no larger than 20 characters"
                                    placeholder="Last Name"
                                    value={this.props.name.last}
                                    onChange={this.onChange(this.props.profileActionDispatcher.updateLastName)}
                                    validator={this.onValidate('name.last')}
                                />
                                <InputText
                                    fieldId="email"
                                    label="Enter the email"
                                    help="The email is required and must be a valid format"
                                    placeholder="Email"
                                    value={this.props.email}
                                    onChange={this.onChange(this.props.profileActionDispatcher.updateEmail)}
                                    validator={this.onValidate('email')}
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
