import React, { Component } from 'react';

export default class MultiFormGroup extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'containers/MultiFormGroup';
    }

    render() {
        return (
            <div className="form-group" id={this.props.id} role="group" aria-labelledby={this.props.id + "_label"}>
                <label id={this.props.id + "_label"}>{this.props.label}</label>
                {this.props.children}
            </div>
        );
    }
}