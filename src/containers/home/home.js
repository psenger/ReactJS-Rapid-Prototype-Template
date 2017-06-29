import React, { Component } from 'react';
import I18NInjector from '../../decorator/i18nInjector';
import PropTypes from 'prop-types';

@I18NInjector()
export class Home extends Component {

  constructor (props) {
    super(props);
    this.displayName = 'containers/home';
  }

  render () {
    let {translate} = this.props.i18n;

    return (
      <div data-component-name={this.displayName}>
        <h1>{ translate('Home') }</h1>
        <p>{ translate('Welcome Home %{name}', {name: 'Larry'}) }</p>
      </div>
    );
  }
}

export { Home as default };

Home.propTypes = {
  i18n: PropTypes.object.isRequired
};
