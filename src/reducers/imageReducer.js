import {SELECT_IMAGE} from '../action/types'


function imageData(state = [], action) {
    switch(action.type) {
        case SELECT_IMAGE:
            let newState = JSON.parse(JSON.stringify(state));
            newState[0][action.payload.pageIndex][action.payload.imageIndex].selected =
                !newState[0][action.payload.pageIndex][action.payload.imageIndex].selected;
            return newState;
    }
    return state;
}

export default imageData;