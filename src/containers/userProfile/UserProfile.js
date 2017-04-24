
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Form from "../../components/form";
import FormGroup from "../../components/formGroup";
import MultiFormGroup from "../../components/multiFormGroup";
import Input from "../../components/input";
import {bindActionCreators} from 'redux';
import * as ProfileAction from '../../actionCreators/profileAction';

export class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/UserProfile';
        this.onSubmit = this.onSubmit.bind(this);
        console.log('profile called', this.props.params );
    }

    onSubmit() {
        // console.log('onSubmit', this.props.profileAction.updateEmail('xxxxx') );
        console.log('onSubmit');
    }

    render() {
        return (
            <Form>

                <MultiFormGroup id="name"
                                label="Full Name">
                    <div>
                        <Input id="first"
                               type="text"
                               className="form-control"
                               aria-describedby="firstHelp"
                               placeholder="Enter first name"
                               tabIndex="0"
                               onChange={(e) => {
                                   this.props.profileAction.updateFirstName(e.target.value);
                               }}/>
                        <small id="firstHelp" className="form-text text-muted">Enter your first name
                        </small>
                        <Input id="last"
                               type="text"
                               className="form-control"
                               aria-describedby="lastHelp"
                               placeholder="Enter email"
                               tabIndex="0"
                               onChange={(e) => {
                                   this.props.profileAction.updateLastName(e.target.value);
                               }}/>
                        <small id="lastHelp"
                               className="form-text text-muted">Enter your last name.
                        </small>
                    </div>
                </MultiFormGroup>

                <FormGroup inputId="email"
                           label="Email address">
                    <Input id="email"
                           type="email"
                           className="form-control"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           tabIndex="0"
                           onChange={(e) => {
                               this.props.profileAction.updateEmail(e.target.value);
                           }}/>
                    <small id="emailHelp"
                           className="form-text text-muted">Enter your email.
                    </small>
                </FormGroup>

                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </Form>
        );
    }
}

// Use props to create warnings in the console if they are missing.
UserProfile.propTypes = {
    profileReducer: PropTypes.object.isRequired
};

function mapStateToProps(store /** , ownProps **/) {
    return {
        profileReducer: store.profileReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        profileAction: bindActionCreators(ProfileAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);