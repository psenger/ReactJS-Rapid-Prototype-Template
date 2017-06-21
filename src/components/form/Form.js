import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor (props) {
    super(props);
    this.displayName = 'components/Form';
  }

  render () {
    return (
      <form data-component-name={this.displayName}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired
};
