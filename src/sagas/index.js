import 'babel-polyfill'
import { fork } from 'redux-saga/effects';
import fetchProfilesSaga from './watchers/profilesWatcher';
import fetchProfileSaga from './watchers/profileWatcher';

/** ******************************* **/
/** Root Exported Saga, that is run **/
/** ******************************* **/

export default function* rootSaga() {
    yield [
        fork(fetchProfilesSaga),
        fork(fetchProfileSaga)
    ]
}
