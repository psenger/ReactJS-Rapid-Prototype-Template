
import React, {Component} from 'react';
import I18NInjector from '../../decorator/i18nInjector';

@I18NInjector()
export class NotFound extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/NotFound';
  }

  render() {
    return (
      <div data-component-name={this.displayName}>
        { this.props.i18n.translate('404 Not found') }
      </div>
    );
  }
}

export {NotFound as default};
