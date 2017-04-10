/**
 * Created by psenger on 7/04/2017.
 */
import React from 'react';

export default React.createClass({
    displayName: 'MultiFormGroup',

    render() {
        return (
            <div className="form-group" id={this.props.id} role="group" aria-labelledby={this.props.id + "_label"}>
                <label id={this.props.id + "_label"}>{this.props.label}</label>
                {this.props.children}
            </div>
        );
    }
});