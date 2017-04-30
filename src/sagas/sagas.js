import 'babel-polyfill'
import { call, put, takeLatest } from 'redux-saga/effects'
import {PROFILES_REQUEST} from '../actionCreators/actionTypes/profiles';
import {requestProfilesSuccess,requestProfilesFail} from '../actionCreators/profilesAction';
import * as api from '../services/api';

export function* fetchProfiles() {
    try {
        const topics = yield call(api.fetchProfiles);
        yield put(requestProfilesSuccess(topics));
    } catch (e) {
        console.log(e);
        if ( e.status === 500 ) {
            yield put(requestProfilesFail( 'System failure' ) );
        } else {
            yield put(requestProfilesFail( 'System is off-line' ) );
        }
    }
}

export function* fetchProfilesSaga() {
    // takeLatest does not allow concurrent fetches of PROFILES_REQUEST
    yield takeLatest(PROFILES_REQUEST, fetchProfiles);
}
