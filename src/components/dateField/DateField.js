import { lpad } from '../../utils';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

/**
 * Date Field - Used to create a three field component capturing the Day Month Year.
 * @class
 */
export default class DateField extends Component {

  /**
   * @constructor
   * @param props
   */
  constructor (props) {
    super(props);
    this.displayName = 'components/DateField';
    this.onChangeProxy = this.onChangeProxy.bind(this);
  }

  /**
   * determine the aria-invalid value
   * @function
   * @returns {boolean}
   */
  ariaInvalid () {
    return (this.props.validator(this.props.getModelToValidate(this.props.value)) === 'warning' || this.props.validator(this.props.getModelToValidate(this.props.value)) === 'error');
  }

  /**
   * onChange Proxy, feed to the input fields.
   * @function
   * @param {string} datePart - the part of the string to search for. EG 'year', 'month', 'day'
   * @returns {function(this:DateField)} binds to this.
   */
  onChangeProxy (datePart) {
    return function (e) {
      let year = (datePart === 'year') ? e.target.value : this.props.year;
      let month = (datePart === 'month') ? e.target.value : this.props.month;
      let day = (datePart === 'day') ? e.target.value : this.props.day;

      this.props.onChange({ target: { value: lpad(year, 4) + '-' + lpad(month, 2) + '-' + lpad(day, 2) } });
    }.bind(this);
  }

  render () {
    return (
      <FormGroup data-component-name={this.displayName} controlId={this.props.fieldId} validationState={this.props.validator(this.props.getModelToValidate(this.props.value))}>
        <ControlLabel aria-hidden="true">{this.props.label}</ControlLabel>
        <div className="container-fluid" style={{ padding: 0 }}>
          <div className="row">
            <div className="col-xs-4">
              <ControlLabel srOnly={true} htmlFor={this.props.fieldId + '_day'}>Day of the month of the birth day</ControlLabel>
              <FormControl type="number" value={this.props.day} placeholder='Day' onChange={this.onChangeProxy('day')} aria-invalid={this.ariaInvalid()} required="true" id={this.props.fieldId + '_day'} tabIndex="0" />
              <div className="row">
                <div className="col-xs-12">
                  <HelpBlock id={this.props.fieldId + '_help_day'} role="tooltip">Day</HelpBlock>
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <ControlLabel srOnly={true} htmlFor={this.props.fieldId + '_month'}>Month of the birth day</ControlLabel>
              <FormControl type="number" value={this.props.month} placeholder='Month' onChange={this.onChangeProxy('month')} aria-invalid={this.ariaInvalid()} required="true" id={this.props.fieldId + '_month'} tabIndex="0" />
              <div className="row">
                <div className="col-xs-12">
                  <HelpBlock id={this.props.fieldId + '_help_month'} role="tooltip">Month</HelpBlock>
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <ControlLabel srOnly={true} htmlFor={this.props.fieldId + '_year'}>Year of the birth day</ControlLabel>
              <FormControl type="number" value={this.props.year} placeholder='Year' onChange={this.onChangeProxy('year')} aria-invalid={this.ariaInvalid()} required="true" id={this.props.fieldId + '_year'} tabIndex="0" />
              <div className="row">
                <div className="col-xs-12">
                  <HelpBlock id={this.props.fieldId + '_help_year'} role="tooltip">Year</HelpBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormGroup>
    );
  }
}

/**
 * @type {{fieldId, validator, getModelToValidate, label, value, placeholder, onChange, help, day, month, year}}
 */
DateField.propTypes = {
  fieldId: PropTypes.string.isRequired,
  validator: PropTypes.func.isRequired,
  getModelToValidate: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  help: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};
