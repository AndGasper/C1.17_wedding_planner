import {UPDATE_PREFS, SEND_PREFS_TO_SERVER, GET_PLANNER_PROFILE} from '../actions/types'
import { SET_CURRENT_PLANNER, CHANGE_PLANNER_INFO, LOGOUT_PLANNER } from '../actions/types';

function PlannerData(state = [], action) {
    switch(action.type) {
        case UPDATE_PREFS:
            let newState1 = JSON.parse(JSON.stringify(state));
            newState1[action.payload.category] = action.payload.imageValue;
            return newState1;
        case SEND_PREFS_TO_SERVER:
            return state;
        case GET_PLANNER_PROFILE:
            let newState2 = JSON.parse(JSON.stringify(state));
            newState2.settings = action.payload.data;
            return newState2;
        case SET_CURRENT_PLANNER:
            return {
                    ...state,
                    active_planner: action.payload,
                };
        case CHANGE_PLANNER_INFO:
            return {
                ...state
            };
        case LOGOUT_PLANNER:
            return {
                ...state,
                active_planner: '',
            }
    }
    return state;
}

export default PlannerData;