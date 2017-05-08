
import PropTypes from "prop-types";
import React, {Component} from 'react';

export default class SystemError extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/SystemError';
    }

    render() {
        return (
            <div data-component-name={this.displayName}>
                System Error
            </div>
        );
    }
}

// needed to allow specific context to be brought down.
SystemError.contextTypes = {
    i18n: PropTypes.object.isRequired
};