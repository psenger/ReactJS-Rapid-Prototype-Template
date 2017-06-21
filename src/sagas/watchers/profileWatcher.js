import callFetchProfile from '../workers/profileWorker';
import ACTIONS from '../../actionCreators/actionTypes/index';
import { takeLatest } from 'redux-saga/effects';

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

export default function* fetchProfileSaga () {
  // takeLatest does not allow concurrent fetches of PROFILES_REQUEST
  yield takeLatest(ACTIONS.PROFILE.REQUEST.INITIATE, callFetchProfile);
}
