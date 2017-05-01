
import {lpad} from '../utils';
import PropTypes from "prop-types";
import React, {Component} from "react";

import {ControlLabel, FormControl, FormGroup, HelpBlock,} from "react-bootstrap";

export default class DateFields extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'components/DateFields';
        this.onChangeProxy = this.onChangeProxy.bind(this);
    }

    ariaInvalid() {
        return '';
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
            <FormGroup controlId={this.props.fieldId}
                       validationState={ this.props.validator( this.props.getValidationModel( this.props.value ) ) }
                >
                <ControlLabel>{this.props.label}</ControlLabel>
                <div className="container-fluid" style={{padding: 0}}>
                    <div className="row">
                        <div className="col-xs-4">
                            <FormControl type="number"
                                         value={this.props.day}
                                         placeholder='Day'
                                         onChange={this.onChangeProxy('day')}
                                         aria-invalid={this.ariaInvalid()}
                                         tabIndex="0"/>
                        </div>
                        <div className="col-xs-4">
                            <FormControl type="number"
                                         value={this.props.month}
                                         placeholder='Month'
                                         onChange={this.onChangeProxy('month')}
                                         aria-invalid={this.ariaInvalid()}
                                         tabIndex="0"/>
                        </div>
                        <div className="col-xs-4">
                            <FormControl type="number"
                                         value={this.props.year}
                                         placeholder='Year'
                                         onChange={this.onChangeProxy('year')}
                                         aria-invalid={this.ariaInvalid()}
                                         tabIndex="0"/>
                        </div>
                    </div>
                </div>
                <HelpBlock>{this.props.help}</HelpBlock>
            </FormGroup>
        )
    }
}

DateFields.propTypes = {
    fieldId: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
    getValidationModel: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    help: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
};