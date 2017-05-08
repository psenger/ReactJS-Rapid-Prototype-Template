import React from 'react';
import I18N from './src/i18n';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/app';
import store from './src/store/index';
import ThemeProvider from './src/containers/ThemeProvider/themeProvider'

let i18n = new I18N({
    "values":{
        'Welcome home.': 'Welcome home.',
        "Good bye friend": "Au revoir mon ami",
        "Yes": "Oui",
        "No": "Non",
        "Welcome %{name}": "Bonjour %{name}"
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
        <ThemeProvider i18n={i18n} >
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </div>,
    document.getElementById('app'));