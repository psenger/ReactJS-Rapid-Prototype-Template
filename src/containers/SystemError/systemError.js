import React, { Component } from 'react';
import I18NInjector from '../../decorator/i18nInjector';

@I18NInjector()
export class SystemError extends Component {

  constructor (props) {
    super(props);
    this.displayName = 'containers/SystemError';
  }

  render () {
    return (
      <div data-component-name={this.displayName}>
        <h1>{ this.props.i18n.translate('System Error') }</h1>
      </div>
    );
  }
}

export { SystemError as default };
