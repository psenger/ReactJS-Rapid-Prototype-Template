
import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { loadProfile, requestProfileSuccess, requestProfileFail } from '../../actionCreators/profileAction';
import * as api from '../../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

export default function* call_fetchProfile ( action ) {
  try {
    const profile = yield call( api.fetchProfile, action.value );
    yield put( loadProfile( profile ) );
    yield put( requestProfileSuccess( '' ) )
  } catch (e) {
    if ( e.status === 500 ) {
      yield put( requestProfileFail( 'System failure' ) );
    } else {
      yield put( requestProfileFail( 'System is off-line' ) );
    }
  }
}
