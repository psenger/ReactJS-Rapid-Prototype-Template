
import PropTypes from "prop-types";
import React, {Component} from 'react';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/Home';

        console.log( JSON.stringify(this.context,'\t',4)); //this.props.context.i18n.translate('Welcome home.')
    }

    render() {
        return (
            <div data-component-name={this.displayName}>
                {}
            </div>
        );
    }
}

// needed to allow context to be brought down.
Home.contextTypes = {
    i18n: PropTypes.object.isRequired
};