/**
 * Created by psenger on 7/04/2017.
 */
import React, { Component } from 'react';

export default class FormGroup extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'containers/FormGroup';
    }

    render() {
        // role="group" aria-labelledby="ssn1"
        return (
            <div className="form-group" id={this.props.inputId + '_form-group'} >
                <label htmlFor={this.props.inputId}>{this.props.label}</label>
                {this.props.children}
            </div>
        );
    }
}