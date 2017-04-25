import PropTypes from "prop-types";
import {connect} from "react-redux";
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import Form from "../../components/form";
import {fetchProfile} from "../../services/api";
import * as ProfileAction from "../../actionCreators/profileAction";
import {Button,Alert,ProgressBar,FormGroup,ControlLabel,FormControl,HelpBlock} from "react-bootstrap";

const delayPromise = (ms) => {
    return (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, ms);
        })
    };
};

export class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/UserProfile';
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if ( this.props.match && this.props.match.params && this.props.match.params.id ) this.load( this.props.match.params.id )
    }

    load( id ) {
        console.log( 'load called', id );
        this.setState({loading:true},
            ()=> {
                fetchProfile(id)
                    .then(delayPromise(1000))
                    .then((data) => {
                        this.setState(data);
                        // return this.props.profileReducer. // .updateProfiles(data);
                    })
                    .then(() => {
                        this.setState({loading: false})
                    });
            }
        )

    }

    onSubmit() {
        // console.log('onSubmit', this.props.profileAction.updateEmail('xxxxx') );
        console.log('onSubmit');
       // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
    }

    handleChange(fieldName) {
        return (e) => {
            console.log(e);
            this.props.profileActionDispatcher.updateFirstName('larry')
        }
    }
    getValidationState(){
        console.log('getValidationState');
        // valid values are ["success","warning","error",null]
        return null;
    }

    render() {
        return (
            <Form>
                {(this.state.loading) ?
                    (
                        <ProgressBar now={10} label="10" srOnly/>
                    ):(
                        <div>
                            <FormGroup controlId="formBasicText"
                                       validationState={this.getValidationState()}>
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl type="text"
                                             value={this.props.profileReducer.name.first}
                                             placeholder="Enter first name"
                                             onChange={this.handleChange('name.first')} />
                                <FormControl.Feedback />
                                <HelpBlock>Enter the first name</HelpBlock>
                            </FormGroup>

                            <Button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</Button>
                        </div>
                    )
                }
            </Form>
        );
    }
}

// Use props to create warnings in the console if they are missing.
UserProfile.propTypes = {
    profileReducer: PropTypes.object.isRequired
};

let mapStateToProps = (store /** , ownProps **/) => {
    return {
        profileReducer: store.profileReducer
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        profileActionDispatcher: bindActionCreators(ProfileAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

/**
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
**/