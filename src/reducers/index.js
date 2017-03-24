import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coupleData from './coupleReducer';
import plannerData from './plannerReducer';
import imageData from './imageReducer';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    coupleData, plannerData,
    imageData,form: formReducer,
    routing: routerReducer});

export default rootReducer;