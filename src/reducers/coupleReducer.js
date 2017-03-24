import {SET_CURRENT_CLIENT} from '../actions/types';

function coupleData(state = [], action) {
    switch(action.type){
        case SET_CURRENT_CLIENT:
            return {
                ...state,
                active_client: action.payload
            }

    }
    return state;
}

export default coupleData;