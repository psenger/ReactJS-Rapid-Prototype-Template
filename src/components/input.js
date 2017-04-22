
import React, { Component } from 'react';
// import { omit } from 'lodash';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'components/Input';
        this._props = Object.assign({}, this.props);
        // this.props.onChange = this.props.onChange.bind(this);
        // this.props.onInput = this.props.onInput.bind(this);
        // this.props.onBlur = this.props.onBlur.bind(this);
    }

    render() { /** {...omit(this.props, 'onChange')} **/
        return (<input {...this._props} />);
    }
}
