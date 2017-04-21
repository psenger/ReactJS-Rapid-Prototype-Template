import React, { Component } from 'react';
// import { omit } from 'lodash';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'containers/Form';
    }

    render() {
        return (
            <form>
                {this.props.children}
            </form>
        );
    }
}