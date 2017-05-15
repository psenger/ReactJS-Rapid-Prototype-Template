
import React, {Component} from 'react';
import DomPurify from '../../components/domPurify';
import I18NInjector from '../../decorator/i18nInjector';

@I18NInjector()
export class About extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/About';
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>{this.props.i18n.translate('About this project')}</h1>
          <p><DomPurify content={this.props.i18n.translate('About_this_project_details')}/></p>
          <p><a className="btn btn-primary btn-lg" role="button"
                href="https://github.com/psenger/ReactJS-Rapid-Prototype-Template/blob/master/README.md"
                rel="external" target="_blank">{this.props.i18n.translate('Learn More')}</a></p>
          <p><a className="btn btn-primary btn-lg" role="button"
                href="https://github.com/psenger/ReactJS-Rapid-Prototype-Template" rel="external"
                target="_blank">{this.props.i18n.translate('Explore the project on Github')}</a></p>
        </div>
        <br/>
        <pre
          className="well well-sm">{this.props.i18n.translate('MIT License Copyright (c) 2017 Philip A Senger')}</pre>
      </div>
    );
  }
}

export {About as default};
