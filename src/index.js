import React from 'react';
import I18N from './i18n';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import App from './containers/app';
import I18NProvider from './provider/i18nProvider';

/* eslint-disable quote-props */
let i18n = new I18N({
  values: {
    /** ----------------------------------- **/
    'Welcome Home %{name}': 'Welcome Home %{name}',
    /** ----------------------------------- **/
    '404 Not found': '404 Not found',
    /** ----------------------------------- **/
    'About this project': 'About this project',
    'About_this_project_details': 'Currently, a simple ReactJS Rapid Prototype Template, based on <span style="text-decoration: line-through">Aik</span> Webpack 2.5, ReactJS, Redux, and Sagas',
    'Learn More': 'Learn More',
    'Explore the project on Github': 'Explore the project on Github',
    'MIT License Copyright (c) 2017 Philip A Senger': 'MIT License Copyright (c) 2017 Philip A Senger',
    /** ----------------------------------- **/
    'Profiles Search': 'Profiles Search',
    'Search Name': 'Search Name',
    'Enter search name': 'Enter search name',
    'Enter a name to search': 'Enter a name to search',
    /** ----------------------------------- **/
    'Profile Edit': 'Profile Edit',
    'Enter the first name': 'Enter the first name',
    'The first name is required and can be no larger than %n characters': 'The first name is required and can be no larger than %n characters',
    'First Name': 'First Name',
    'Enter the last name': 'Enter the last name',
    'The last name is required and can be no larger than %n characters': 'The last name is required and can be no larger than %n characters',
    'Last Name': 'Last Name',
    'Enter the email': 'Enter the email',
    'The email is required and must be a valid format': 'The email is required and must be a valid format',
    'Email': 'Email',
    'Enter the Date of Birth': 'Enter the Date of Birth',
    'The Date of Birth is required': 'The Date of Birth is required',
    'dob': 'dob',
    /** ----------------------------------- **/
    'System Error': 'System Error',
    /** ----------------------------------- **/
    'Submit': 'Submit'
  }
});
/* eslint-enable quote-props */

ReactDOM.render(
  <div className='container' data-component-name='index'>
    <Provider store={store}>
      <I18NProvider i18n={i18n}>
        <App />
      </I18NProvider>
    </Provider>
  </div>,
  document.getElementById('app'));

