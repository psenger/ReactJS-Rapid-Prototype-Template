import 'babel-polyfill'
import { call, put, fork, takeLatest } from 'redux-saga/effects'
import { PROFILES_REQUEST } from '../actionCreators/actionTypes/profiles';
import { PROFILE_REQUEST } from '../actionCreators/actionTypes/profile';
import { loadProfiles, requestProfilesSuccess, requestProfilesFail } from '../actionCreators/profilesAction';
import { loadProfile, requestProfileSuccess, requestProfileFail } from '../actionCreators/profileAction';
import * as api from '../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

function* call_fetchProfiles () {
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

function* call_fetchProfile ( action ) {
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

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

function* fetchProfilesSaga() {
    // takeLatest does not allow concurrent fetches of PROFILES_REQUEST
    yield takeLatest ( PROFILES_REQUEST, call_fetchProfiles );
}

function* fetchProfileSaga() {
    // takeLatest does not allow concurrent fetches of PROFILES_REQUEST
    yield takeLatest ( PROFILE_REQUEST, call_fetchProfile );
}

/** ******************************* **/
/** Root Exported Saga, that is run **/
/** ******************************* **/

export default function* rootSaga() {
    yield [
        fork(fetchProfilesSaga),
        fork(fetchProfileSaga)
    ]
}