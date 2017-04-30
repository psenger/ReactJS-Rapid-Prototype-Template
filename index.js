import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/index';
import store from './src/store/index';

ReactDOM.render(
    <div className="container">
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('app'));