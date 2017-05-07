
import PropTypes from "prop-types";
import React, {Component} from 'react';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/Home';
    }

    render() {
        return (
            <div data-component-name={this.displayName}>
                Welcome home.
            </div>
        );
    }
}

// needed to allow context to be brought down.
Home.contextTypes = {
    theme: PropTypes.object.isRequired
};