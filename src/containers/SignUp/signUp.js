
import React, {Component} from 'react';
import I18NInjector from '../../decorator/i18nInjector';

@I18NInjector()
export class SignUp extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/Home';
  }

  render() {
    return (
      <div data-component-name={this.displayName}>
        <h1>{ this.props.i18n.translate('Sign Up') }</h1>
      </div>
    );
  }
}

export {SignUp as default};
