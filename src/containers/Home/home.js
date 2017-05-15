
import React, {Component} from 'react';
import I18NInjector from '../../decorator/i18nInjector';

@I18NInjector()
export class Home extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/Home';
  }

  render() {
    return (
      <div data-component-name={this.displayName}>
        <h1>{ this.props.i18n.translate('Home') }</h1>
        <p>{ this.props.i18n.translate('Welcome Home %{name}', {name: 'Larry'}) }</p>
      </div>
    );
  }
}

export {Home as default};
