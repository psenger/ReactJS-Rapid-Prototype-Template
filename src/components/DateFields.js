import PropTypes from "prop-types";
import React, {Component} from "react";
import {ControlLabel, FormControl, FormGroup, HelpBlock,} from "react-bootstrap";

export default class DateFields extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'components/DateFields';
        this.state = {
            day: 0,
            month: 0,
            year: 0
        }
    }

    ariaInvalid() {
        return '';
    }

    /**
     * Is invoked before a mounted component receives new props. If you need to update the state in response to prop
     * changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions
     * using this.setState() in this method. Note that React may call this method even if the props have not changed,
     * so make sure to compare the current and next values if you only want to handle changes. This may occur when
     * the parent component causes your component to re-render. React doesn't call componentWillReceiveProps with
     * initial props during mounting. It only calls this method if some of component's props may update. Calling
     * this.setState generally doesn't trigger componentWillReceiveProps.
     */
    componentWillReceiveProps(nextProps) {
        console.log('<<<>>>', nextProps);
        this.setState({
            day: 0,
            month: 0,
            year: 0
        });
    }

    render() {
        return (
            <FormGroup controlId={this.props.fieldId}
                // validationState={this.props.validator(this.props.value)}
            >
                <ControlLabel>{this.props.label}</ControlLabel>
                <div className="container-fluid" style={{padding: 0}}>
                    <div className="row">
                        <div className="col-xs-4">
                            <FormControl type="number"
                                         value={this.props.value}
                                         placeholder='Day'
                                         onChange={this.props.onChange}
                                         aria-invalid={this.ariaInvalid()}
                                         tabIndex="0"/>
                        </div>
                        <div className="col-xs-4">
                            <FormControl type="number"
                                         value={this.props.value}
                                         placeholder='Month'
                                         onChange={this.props.onChange}
                                         aria-invalid={this.ariaInvalid()}
                                         tabIndex="0"/>
                        </div>
                        <div className="col-xs-4">
                            <FormControl type="number"
                                         value={this.props.value}
                                         placeholder='Year'
                                         onChange={this.props.onChange}
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
    // validator: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    help: PropTypes.string.isRequired
};