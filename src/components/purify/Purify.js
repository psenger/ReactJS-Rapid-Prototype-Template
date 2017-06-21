/**
 * adopted extension of https://github.com/cure53/DOMPurify
 */
import { attrs } from '../../aria';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * DomPurify uses https://www.npmjs.com/package/dompurify to sanctify html suitable for ReactJS
 * @class
 */
export default class Purify extends Component {

  constructor (props, context) {
    super(props, context);
    this.displayName = 'components/DomPurify';
    this.state = {domPurifyOptions: this.props.domPurifyOptions || {ADD_ATTR: attrs}};

  }

  render () {
    let {className, content} = this.props;
    let dSIHTML = { __html: DOMPurify.sanitize(content, this.state.domPurifyOptions) };

    /* eslint-disable */
    return (<span className={className} dangerouslySetInnerHTML={dSIHTML}/>);
    /* eslint-enable */
  }

}

/**
 * @type {{content, className: *, domPurifyOptions: *}}
 */
Purify.propTypes = {
  content: PropTypes.string.required,
  className: PropTypes.string,
  domPurifyOptions: PropTypes.shape({
    ADD_ATTR: PropTypes.arrayOf(PropTypes.string)
  })
};
