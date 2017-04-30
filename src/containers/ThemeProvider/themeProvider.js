
import PropTypes from "prop-types";
import React, { Component, Children } from 'react';

class ThemeProvider extends Component {

    constructor(props, context) {
        super(props,context);
        this.displayName = 'containers/ThemeProvider';
    }

    getChildContext() {
        return {theme: this.props.theme};
    }

    render() {
        let children = this.props.children;
        // Children.only enables us not to add a <div /> for nothing
        return children ? Children.only(children) : null;
    }
}

ThemeProvider.propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

ThemeProvider.contextTypes = {
    theme: PropTypes.object
};

// you must specify what you’re adding to the context
ThemeProvider.childContextTypes = {
    theme: PropTypes.object.isRequired,
};

export default ThemeProvider