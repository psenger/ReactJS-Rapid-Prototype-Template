import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
// import {Validator}  from '../decorator/Validator';

const helpWithRequired = (fieldId, help) => (<div className="container-fluid" style={{ padding: 0 }}>
  <div className="row">
    <div className="col-xs-8"><HelpBlock id={fieldId + '_help'} role="tooltip">{help}</HelpBlock></div>
    <div className="col-xs-4"><span className="text-danger text-info pull-right">Required</span></div>
  </div>
</div>);

const help = (help) => (<HelpBlock>{help}</HelpBlock>);

// @Validator()
/**
 * This class has a default state of dirty = false.
 * When onchange fires, and the target value does not match the props value, it is set to true, false if they match.
 */
export default class InputText extends Component {

  constructor (props) {
    super(props);
    this.displayName = 'components/InputText';
    this.state = { dirty: false };
  }

  componentWillReceiveProps (nextProps) {
    // console.log( 'componentWillReceiveProps this.props.value= ' , this.props.value );
    // console.log( 'componentWillReceiveProps nextProps.value= ' , nextProps.value );
    if (this.props.value === null) {
      return;
    }
    this.setState({ dirty: this.props.value !== nextProps.value });
  }

  ariaInvalid () {
    // console.log( '#ariaInvalid, state = ', this.state.dirty, this.props.value );
    return (this.props.validator(this.props.getModelToValidate(this.props.value), this.state.dirty) === 'warning' ||
    this.props.validator(this.props.getModelToValidate(this.props.value), this.state.dirty) === 'error');
  }

  onChangeProxy (fn) {
    let self = this;

    return function (e) {
      this.setState({ dirty: this.props.value !== e.target.value }, fn(e));
    }.bind(self);
  }

  render () {
    return (
      <FormGroup data-component-name={this.displayName} controlId={this.props.fieldId} validationState={this.props.validator(this.props.getModelToValidate(this.props.value), this.state.dirty)}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={this.onChangeProxy(this.props.onChange)} aria-invalid={this.ariaInvalid()} aria-describedby={this.props.fieldId + '_help'} tabIndex="0" required={this.props.required} />
        <FormControl.Feedback aria-hidden="true" />
        {this.props.required ? helpWithRequired(this.props.fieldId, this.props.help) : help(this.props.help)}
      </FormGroup>
    );
  }
}

InputText.propTypes = {
  fieldId: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  validator: PropTypes.func.isRequired,
  getModelToValidate: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  help: PropTypes.string.isRequired
};
