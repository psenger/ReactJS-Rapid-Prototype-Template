
import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { loadProfiles, requestProfilesSuccess, requestProfilesFail } from '../../actionCreators/profilesAction';
import * as api from '../../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

export default function* call_fetchProfiles () {
  try {
    const profiles = yield call( api.fetchProfiles );
    yield put( loadProfiles( profiles )  );
    yield put( requestProfilesSuccess( '' ) );
  } catch (e) {
    if ( e.status === 500 ) {
      yield put( requestProfilesFail( 'System failure' ) );
    } else {
      yield put( requestProfilesFail( 'System is off-line' ) );
    }
  }
}
