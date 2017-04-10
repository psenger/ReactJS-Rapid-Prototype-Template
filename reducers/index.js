import * as actionConst from '../actions/const';

let initialState = [];

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionConst.SET_HIGHEST_SCORE:
            return Object.assign({}, state, {highestScore: action.value});

        default:
            return state
    }
}