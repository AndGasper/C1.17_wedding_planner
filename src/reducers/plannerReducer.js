import { SET_CURRENT_PLANNER, CHANGE_PLANNER_INFO, LOGOUT_PLANNER, } from '../actions/types';
import { GET_PLANNERS_FROM_SERVER } from '../action/types'

function PlannerData(state = [], action) {
    switch(action.type) {
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
                active_planner: ''
            };
        case GET_PLANNERS_FROM_SERVER:
            return {
                ...state,
                planners: action.payload.data
            }
    }
    return state;
}

export default PlannerData;