import * as actionConst from "../actions/const";
import {fromJS} from "immutable";

let initialState = fromJS({});

function modifyName ( state, action ) {
    let name = Object.assign({}, state.name, action.name );
    return Object.assign({}, state, { name } );
}
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case actionConst.PROFILE_MODIFY_ACTIVE:
            return Object.assign({}, state, {isActive: action.isActive});
        case actionConst.PROFILE_MODIFY_EMAIL:
            return Object.assign({}, state, {email: action.email});
        case actionConst.PROFILE_MODIFY_FIRST_NAME:
            return modifyName( state, action );
        case actionConst.PROFILE_MODIFY_LAST_NAME:
            return modifyName( state, action );
        default:
            return state
    }
}