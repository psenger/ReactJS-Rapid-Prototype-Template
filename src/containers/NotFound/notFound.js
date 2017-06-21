import React, { Component } from 'react';
import I18NInjector from '../../decorator/i18nInjector';
import PropTypes from 'prop-types';

@I18NInjector()
export class NotFound extends Component {

  constructor (props) {
    super(props);
    this.displayName = 'containers/NotFound';
  }

  render () {
    let {translate} = this.props.i18n;

    return (
      <div data-component-name={this.displayName}>
        { translate('404 Not found') }
      </div>
    );
  }
}

export { NotFound as default };

NotFound.propTypes = {
  i18n: PropTypes.object.isRequired
};
