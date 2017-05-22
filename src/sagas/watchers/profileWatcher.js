
import call_fetchProfile from '../workers/profileWorker';
import ACTIONS from "../../actionCreators/actionTypes/index";

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

export default function* fetchProfileSaga() {
  // takeLatest does not allow concurrent fetches of PROFILES_REQUEST
  yield takeLatest ( ACTIONS.PROFILE.REQUEST.INITIATE, call_fetchProfile );
}
