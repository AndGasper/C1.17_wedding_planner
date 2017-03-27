
import {UPDATE_PREFS, SEND_PREFS_TO_SERVER, GET_COUPLE_PROFILE} from '../action/types'
import { SET_CURRENT_CLIENT, CHANGE_CLIENT_INFO } from '../actions/types';

function coupleData(state = [], action) {
    switch(action.type) {
        case UPDATE_PREFS:
            let newState1 = JSON.parse(JSON.stringify(state));
            newState1[action.payload.category] = action.payload.imageValue;
            return newState1;
        case SEND_PREFS_TO_SERVER:
            return state;
        case GET_COUPLE_PROFILE:
            let newState2 = JSON.parse(JSON.stringify(state));
            newState2.settings = action.payload.data;
            return newState2;
        case SET_CURRENT_CLIENT:
            return {
                    ...state,
                    active_client: action.payload
                };
        case CHANGE_CLIENT_INFO:
            return {
                ...state,
                active_client: action.payload
            };
    }
    return state;
}

export default coupleData;