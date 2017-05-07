
import {lpad} from '../utils';
import PropTypes from "prop-types";
import React, {Component} from "react";

import {ControlLabel, FormControl, FormGroup, HelpBlock } from "react-bootstrap";

export default class DateFields extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'components/DateFields';
        this.onChangeProxy = this.onChangeProxy.bind(this);
    }

    ariaInvalid() {
        return ( this.props.validator( this.props.getModelToValidate( this.props.value ) ) === "warning" || this.props.validator( this.props.getModelToValidate( this.props.value ) ) ==="error" );
    }

    onChangeProxy( datePart ) {
        return function (e) {
            let year = (datePart === 'year') ? e.target.value : this.props.year;
            let month = (datePart === 'month') ? e.target.value : this.props.month;
            let day = (datePart === 'day') ? e.target.value : this.props.day;
            this.props.onChange({target: {value: lpad(year,4) + '-' + lpad(month,2) + '-' + lpad(day,2) }});
        }.bind(this);
    }

    render() {
        return (
            <FormGroup data-component-name={this.displayName}
                       controlId={this.props.fieldId}
                       validationState={ this.props.validator( this.props.getModelToValidate( this.props.value ) ) }
                >
                <ControlLabel aria-hidden="true">{this.props.label}</ControlLabel>
                <div className="container-fluid" style={{padding: 0}}>
                    <div className="row">
                        <div className="col-xs-4">
                            <ControlLabel srOnly htmlFor={this.props.fieldId + '_day'}>Day of the month of the birth day</ControlLabel>
                            <FormControl type="number"
                                         value={this.props.day}
                                         placeholder='Day'
                                         onChange={this.onChangeProxy('day')}
                                         aria-invalid={this.ariaInvalid()}
                                         required="true"
                                         id={this.props.fieldId + '_day'}
                                         tabIndex="0"/>
                            <div className="row">
                                <div className="col-xs-12"><HelpBlock id={this.props.fieldId + '_help_day'} role="tooltip">Day</HelpBlock></div>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <ControlLabel srOnly htmlFor={this.props.fieldId + '_month'}>Month of the birth day</ControlLabel>
                            <FormControl type="number"
                                         value={this.props.month}
                                         placeholder='Month'
                                         onChange={this.onChangeProxy('month')}
                                         aria-invalid={this.ariaInvalid()}
                                         required="true"
                                         id={this.props.fieldId + '_month'}
                                         tabIndex="0"/>
                            <div className="row">
                                <div className="col-xs-12"><HelpBlock id={this.props.fieldId + '_help_month'} role="tooltip">Month</HelpBlock></div>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <ControlLabel srOnly htmlFor={this.props.fieldId + '_year'}>Year of the birth day</ControlLabel>
                            <FormControl type="number"
                                         value={this.props.year}
                                         placeholder='Year'
                                         onChange={this.onChangeProxy('year')}
                                         aria-invalid={this.ariaInvalid()}
                                         required="true"
                                         id={this.props.fieldId + '_year'}
                                         tabIndex="0"/>
                            <div className="row">
                                <div className="col-xs-12"><HelpBlock id={this.props.fieldId + '_help_year'} role="tooltip">Year</HelpBlock></div>
                            </div>
                        </div>
                    </div>
                </div>
            </FormGroup>
        )
    }
}

DateFields.propTypes = {
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