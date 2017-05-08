
import React from 'react';
import I18N from './src/i18n';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/app';
import store from './src/store/index';
import LabelProvider from './src/containers/labelsProvider/labelProvider'

let i18n = new I18N( {
    "values": {
        /** ----------------------------------- **/
        "Profiles Search":"Profiles Search",
        "Search Name":"Search Name",
        "Enter search name":"Enter search name",
        "Enter a name to search":"Enter a name to search",
        /** ----------------------------------- **/
        "Profile Edit": "Profile Edit",
        "Enter the first name":"Enter the first name",
        "The first name is required and can be no larger than %n characters":"The first name is required and can be no larger than %n characters",
        "First Name": "First Name",
        "Enter the last name":"Enter the last name",
        "The last name is required and can be no larger than %n characters":"The last name is required and can be no larger than %n characters",
        "Last Name":"Last Name",
        "Enter the email":"Enter the email",
        "The email is required and must be a valid format":"The email is required and must be a valid format",
        "Email":"Email",
        "Enter the Date of Birth":"Enter the Date of Birth",
        "The Date of Birth is required":"The Date of Birth is required",
        "dob": "dob",
        /** ----------------------------------- **/
        "Submit":"Submit"
    },
    "contexts":[
        {
            "matches":{
                "gender":"male"
            },
            "values":{
                "%{name} uploaded %n photos to their %{album} album":[
                    [0, 0, "%{name} uploaded %n photos to his %{album} album"],
                    [1, 1, "%{name} uploaded %n photo to his %{album} album"],
                    [2, null, "%{name} uploaded %n photos to his %{album} album"]
                ]
            }
        },
        {
            "matches":{
                "gender":"female"
            },
            "values":{
                "%{name} uploaded %n photos to their %{album} album":[
                    [0, 0, "%{name} uploaded %n photos to her %{album} album"],
                    [1, 1, "%{name} uploaded %n photo to her %{album} album"],
                    [2, null, "%{name} uploaded %n photos to her %{album} album"]
                ]
            }
        }
    ]
} );
ReactDOM.render(
    <div className="container" data-component-name='index'>
        <LabelProvider i18n={i18n} >
            <Provider store={store}>
                <App />
            </Provider>
        </LabelProvider>
    </div>,
    document.getElementById('app'));