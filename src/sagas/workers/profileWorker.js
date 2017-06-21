import { call, put } from 'redux-saga/effects';
import { loadProfile, requestProfileFail, requestProfileSuccess } from '../../actionCreators/profileAction';
import * as api from '../../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

export default function* callFetchProfile (action) {
  try {
    const profile = yield call(api.fetchProfile, action.value);

    yield put(loadProfile(profile));
    yield put(requestProfileSuccess(''));
  } catch (e) {
    if (e.status === 500) {
      yield put(requestProfileFail('System failure'));
    } else {
      yield put(requestProfileFail('System is off-line'));
    }
  }
}
