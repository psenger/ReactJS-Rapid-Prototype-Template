
import PropTypes from "prop-types";
import React, {Component} from 'react';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/SignUp';
    }

    render() {
        return (
            <div data-component-name={this.displayName}>
                Welcome SignUp.
            </div>
        );
    }
}

// needed to allow context to be brought down.
SignUp.contextTypes = {
    i18n: PropTypes.object.isRequired
};