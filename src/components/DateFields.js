import PropTypes from "prop-types";
import React, {Component} from "react";
import {ControlLabel, FormControl, FormGroup, HelpBlock,Overlay,} from "react-bootstrap";

export default class DateFields extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'components/DateFields';
    }

    ariaInvalid() {
        return ( this.props.validator(this.props.value) === "warning" || this.props.validator(this.props.value) === "error" );
    }

    render(){
        return (
            <FormGroup controlId={this.props.fieldId}
                       validationState={this.props.validator(this.props.value)}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl type="text"
                             value={this.props.value}
                             placeholder={this.props.placeholder}
                             onChange={this.props.onChange}
                             aria-invalid={this.ariaInvalid()}
                             tabindex="0"/>
                <FormControl.Feedback aria-hidden="true" role="presentation"/>
                <HelpBlock>{this.props.help}</HelpBlock>
                {this.props.children}

              {/*  <Overlay
                    show={true}
                    target={this.state.target}
                    placement="bottom"
                    container={this}
                    containerPadding={20}>
                    <Popover id="popover-contained" title="Popover bottom">
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover>
                </Overlay>*/}

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