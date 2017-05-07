import PropTypes from "prop-types";
import React, {Component} from "react";

export default class FieldSet extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'components/FieldSet';
    }

    render(){
        return (
            <fieldset className={classNames(this.props.classNames)} data-component-name={this.displayName}>
                <legend>{this.props.legend}</legend>
                {this.props.children}
            </fieldset>
        )
    }
}

FieldSet.propTypes = {
    legend:PropTypes.string.isRequired,
    classNames:PropTypes.object
};