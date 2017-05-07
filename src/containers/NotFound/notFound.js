
import PropTypes from "prop-types";
import React, {Component} from 'react';

export default class NotFound extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/NotFound';
    }

    render() {
        return (
            <div data-component-name={this.displayName}>
                404 Not found
            </div>
        );
    }
}

// needed to allow specific context to be brought down.
NotFound.contextTypes = {
    theme: PropTypes.object.isRequired
};