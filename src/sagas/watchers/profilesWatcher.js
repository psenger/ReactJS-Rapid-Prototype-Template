
import call_fetchProfiles from '../workers/profilesWorker';
import ACTIONS from "../../actionCreators/actionTypes/index";

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

export default function* fetchProfilesSaga() {
  // takeLatest does not allow concurrent fetches of PROFILES_REQUEST
  yield takeLatest ( ACTIONS.PROFILES.REQUEST.INITIATE, call_fetchProfiles );
}
