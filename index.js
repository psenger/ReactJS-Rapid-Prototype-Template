import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import configureStore from './src/store/index';
import Views from './src/views/app';
// import rootSaga from './sagas/index'

let store = configureStore({});
// store.runSaga(rootSaga)

ReactDOM.render(
    <div className="container">
        <Provider store={store}>
            <Views />
        </Provider>
    </div>,
    document.getElementById('app'));