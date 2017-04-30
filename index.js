import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/app';
import store from './src/store/index';
import ThemeProvider from './src/containers/ThemeProvider/themeProvider'

let theme = { name:"hello world" };
ReactDOM.render(
    <div className="container">
        <ThemeProvider theme={theme} >
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </div>,
    document.getElementById('app'));