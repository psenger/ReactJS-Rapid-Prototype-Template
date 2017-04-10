/**
 * Created by psenger on 7/04/2017.
 */
import React from 'react';

export default React.createClass({
    displayName: 'FormGroup',

    render() {
        // role="group" aria-labelledby="ssn1"
        return (
            <div className="form-group" id={this.props.inputId + '_form-group'} >
                <label for={this.props.inputId}>{this.props.label}</label>
                {this.props.children}
            </div>
        );
    }
});