import {UPDATE_COUPLE_PROFILE} from '../action/types'

function coupleData(state = [], action) {
    switch(action.type) {
        case UPDATE_COUPLE_PROFILE:
            let newState = JSON.parse(JSON.stringify(state));
            newState[action.payload.category] = action.payload.imageValue;
            return newState;
    }
    return state;
}

export default coupleData;