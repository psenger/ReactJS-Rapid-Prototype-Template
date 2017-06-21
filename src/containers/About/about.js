import React, { Component } from 'react';
import DomPurify from '../../components/purify/purify';
import I18NInjector from '../../decorator/i18nInjector';
import PropTypes from 'prop-types';

@I18NInjector()
export class About extends Component {

  constructor (props) {
    super(props);
    this.displayName = 'containers/About';
  }

  render () {
    let {translate} = this.props.i18n;

    return (
      <div>
        <div className="jumbotron">
          <h1>{translate('About this project')}</h1>
          <p><DomPurify content={translate('About_this_project_details')} /></p>
          <p><a className="btn btn-primary btn-lg" role="button" href="https://github.com/psenger/ReactJS-Rapid-Prototype-Template/blob/master/README.md" rel="noopener noreferrer" target="_blank">{translate('Learn More')}</a></p>
          <p><a className="btn btn-primary btn-lg" role="button" href="https://github.com/psenger/ReactJS-Rapid-Prototype-Template" rel="noopener noreferrer"  target="_blank">{translate('Explore the project on Github')}</a></p>
        </div>
        <br />
        <pre className="well well-sm">{translate('MIT License Copyright (c) 2017 Philip A Senger')}</pre>
      </div>
    );
  }
}

export { About as default };

About.propTypes = {
  i18n: PropTypes.object.isRequired
};
