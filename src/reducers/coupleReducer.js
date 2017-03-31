
import {UPDATE_PREFS, SEND_PREFS_TO_SERVER, GET_COUPLE_PROFILE } from '../action/types'
import { SET_CURRENT_CLIENT, CHANGE_CLIENT_INFO, LOGOUT_CLIENT, FETCH_PLANNER1, FETCH_PLANNER2, FETCH_PLANNER3,
         FETCH_PLANNER4, FETCH_PLANNER5, FETCH_PLANNER6} from '../actions/types';

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
            if(state.active_client = 'Credentials are Wrong'){
                return {
                    ...state,
                    active_client: action.payload,
                }
            } else {
                return {
                    ...state,
                    active_client: action.payload,
                };
            }

        case CHANGE_CLIENT_INFO:
            return {
                ...state
            };
        case LOGOUT_CLIENT:
            return {
                ...state,
                active_client: undefined
            };
        case FETCH_PLANNER1:
            return {
                ...state,
                planner1: action.payload
            };
        case FETCH_PLANNER2:
            return {
                ...state,
                planner2: action.payload
            };
        case FETCH_PLANNER3:
            return {
                ...state,
                planner3: action.payload
            };
        case FETCH_PLANNER4:
            return {
                ...state,
                planner4: action.payload
            };
        case FETCH_PLANNER5:
            return {
                ...state,
                planner5: action.payload
            };
        case FETCH_PLANNER6:
            return {
                ...state,
                planner6: action.payload
            }
    }
    return state;
}

export default coupleData;