import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coupleData from './coupleReducer';
import authReducer from './auth_reducer';
import plannerData from './plannerReducer';
import imageData from './imageReducer';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    coupleData, plannerData,
    authReducer,
    imageData,form: formReducer,
    routing: routerReducer});

export default rootReducer;