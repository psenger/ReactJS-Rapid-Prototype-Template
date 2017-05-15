
import PropTypes from "prop-types";
import { Component, Children } from 'react';

class I18NProvider extends Component {

    constructor(props, context) {
        super(props,context);
    }

    getChildContext() {
        const {i18n} = this.props;
        return {i18n};
    }

    render() {
        let children = this.props.children;
        // Children.only enables us not to add a <div /> for nothing
        return children ? Children.only(children) : null;
    }
}

I18NProvider.propTypes = {
    i18n: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

I18NProvider.contextTypes = {
    i18n: PropTypes.object
};

// you must specify what you’re adding to the context
I18NProvider.childContextTypes = {
    i18n: PropTypes.object.isRequired,
};

I18NProvider.displayName = 'containers/LabelsProvider';

export { I18NProvider as default };
