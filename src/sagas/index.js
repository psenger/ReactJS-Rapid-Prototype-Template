import { fork } from 'redux-saga/effects';
import fetchProfilesSaga from './watchers/profilesWatcher';
import fetchProfileSaga from './watchers/profileWatcher';
import fetchButtonBarsWatcher from './watchers/buttonsWatcher';

/** ******************************* **/
/** Root Exported Saga, that is run **/
/** ******************************* **/

export default function* rootSaga () {
  yield [
    fork(fetchProfilesSaga),
    fork(fetchProfileSaga),
    fork(fetchButtonBarsWatcher)
  ];
}
