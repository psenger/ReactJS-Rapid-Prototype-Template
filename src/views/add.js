/**
 * Created by psenger on 7/04/2017.
 */
import React from "react";
import {connect} from "react-redux";
import Form from "../components/form";
import FormGroup from "../components/formGroup";
import { bindActionCreators } from 'redux';
import * as ProfileAction from '../actions/profileAction';

export class AddUser extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        console.log('constructor');
    }

    onSubmit() {
        console.log('onSubmit', this.props.profileAction.updateEmail('xxxxx') );
    }

    render() {
        return (
            <Form>
                <FormGroup inputId="email"
                           label="Email address">
                    <input id="email"
                           type="email"
                           className="form-control"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           tabIndex="0"/>
                    <small id="emailHelp"
                           className="form-text text-muted">We'll never share your email with anyone else.
                    </small>
                </FormGroup>

                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </Form>
        );
    }
}

// Use props to create warnings in the console if they are missing.
// AddUser.propTypes = {email: React.PropTypes.string};

// you can also map state to the this.props, via  mapStateToProps  and  connect
// function mapStateToProps(state) {
//     return { email: state.email }
// }

function mapDispatchToProps(dispatch) {
    return { profileAction: bindActionCreators(ProfileAction, dispatch) }
}

// export default connect(mapStateToProps, mapDispatchToProps)(AddUser);

export default connect(mapDispatchToProps)(AddUser);