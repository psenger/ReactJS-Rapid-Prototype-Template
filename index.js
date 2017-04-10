import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import configureStore from './store/index';
import Views from './views/app';

let store = configureStore({});

ReactDOM.render(
    <div className="container">
        <Provider store={store}>
            <Views />
        </Provider>
    </div>,
    document.getElementById('app'));