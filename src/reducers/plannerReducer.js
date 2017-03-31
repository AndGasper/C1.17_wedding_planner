import { SET_CURRENT_PLANNER, CHANGE_PLANNER_INFO, LOGOUT_PLANNER } from '../actions/types';

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
                active_planner: '',
            };
    }
    return state;
}

export default PlannerData;