import rootSaga from '../sagas/index';
import reduxLogger from 'redux-logger';
import reducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware, reduxLogger];

const store = createStore(
    reducers,
    composeWithDevTools( applyMiddleware(...middleware) )
);
sagaMiddleware.run(rootSaga);

export default store;
