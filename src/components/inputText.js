import PropTypes from "prop-types";
import React, {Component} from "react";
import {ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";

export default class InputText extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'components/InputText';
    }

    ariaInvalid() {
        return ( this.props.validator() === "warning" || this.props.validator() ==="error" );
    }

    render(){
        return (
            <FormGroup controlId={this.props.fieldId}
                       validationState={this.props.validator()}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl type="text"
                             value={this.props.value}
                             placeholder={this.props.placeholder}
                             onChange={this.props.onChange}
                             aria-invalid={this.ariaInvalid()}
                             tabindex="0"/>
                <FormControl.Feedback aria-hidden="true" role="presentation"/>
                <HelpBlock>{this.props.help}</HelpBlock>
            </FormGroup>
        )
    }
}

InputText.propTypes = {
    fieldId: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    help:PropTypes.string.isRequired
};