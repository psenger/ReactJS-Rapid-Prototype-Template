/**
 * adopted extension of https://github.com/cure53/DOMPurify
 */
import {attrs} from '../aria';
import dompurify from 'dompurify';
import PropTypes from "prop-types";
import React, {Component} from 'react';

/**
 * DomPurify uses https://www.npmjs.com/package/dompurify to sanctify html suitable for ReactJS
 * @class
 */
export default class DomPurify extends Component {

  constructor(props, context) {
    super(props, context);
    this.displayName = 'components/DomPurify';
    this.state = { domPurifyOptions: this.props.domPurifyOptions || { ADD_ATTR: attrs } };
  };

  render() {
    return (<span className={this.props.className} dangerouslySetInnerHTML={ { __html: dompurify.sanitize( this.props.content, this.state.domPurifyOptions ) } } /> );
  }

}

/**
 * @type {{content, className: *, domPurifyOptions: *}}
 */
DomPurify.propTypes = {
  content: PropTypes.string.required,
  className: PropTypes.string,
  domPurifyOptions: PropTypes.shape({
    ADD_ATTR: PropTypes.arrayOf(PropTypes.string)
  })
};
