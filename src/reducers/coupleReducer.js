import {UPDATE_PREFS, SEND_PREFS_TO_SERVER, GET_COUPLE_PROFILE} from '../action/types'

function coupleData(state = [], action) {
    switch(action.type) {
        case UPDATE_PREFS:
            let newState1 = JSON.parse(JSON.stringify(state));
            newState[action.payload.category] = action.payload.imageValue;
            return newState;
        case SEND_PREFS_TO_SERVER:
            return state;
        case GET_COUPLE_PROFILE:
            let newState2 = JSON.parse(JSON.stringify(state));
            newState.settings = action.payload.data;
            return newState;
    }
    return state;
}

export default coupleData;