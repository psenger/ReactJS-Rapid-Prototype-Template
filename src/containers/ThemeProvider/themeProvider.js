
import PropTypes from "prop-types";
import { Component, Children } from 'react';

class ThemeProvider extends Component {

    constructor(props, context) {
        super(props,context);
        this.displayName = 'containers/ThemeProvider';
    }

    getChildContext() {
        console.log('inserting the i18n');
        return { i18n: this.props.i18n };
    }

    render() {
        let children = this.props.children;
        // Children.only enables us not to add a <div /> for nothing
        return children ? Children.only(children) : null;
    }
}

ThemeProvider.propTypes = {
    i18n: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

ThemeProvider.contextTypes = {
    i18n: PropTypes.object
};

// you must specify what you’re adding to the context
ThemeProvider.childContextTypes = {
    i18n: PropTypes.object.isRequired,
};

export default ThemeProvider