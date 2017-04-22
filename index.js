import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/app';
import configureStore from './src/store/index';
// import rootSaga from './sagas/index'

let store = configureStore({});
// store.runSaga(rootSaga)

ReactDOM.render(
    <div className="container">
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('app'));