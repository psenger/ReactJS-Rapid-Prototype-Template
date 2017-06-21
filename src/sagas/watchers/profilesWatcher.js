import callFetchProfiles from '../workers/profilesWorker';
import ACTIONS from '../../actionCreators/actionTypes/index';
import { takeLatest } from 'redux-saga/effects';

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

export default function* fetchProfilesSaga () {
  // takeLatest does not allow concurrent fetches of PROFILES_REQUEST
  yield takeLatest(ACTIONS.PROFILES.REQUEST.INITIATE, callFetchProfiles);
}
