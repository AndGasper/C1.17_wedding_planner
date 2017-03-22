import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coupleData from './coupleReducer';
import plannerData from './plannerReducer';
import imageData from './imageReducer';
import auth from './auth_reducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    coupleData,
    plannerData,
    imageData,
    routing: routerReducer,
    form,
    auth
});

export default rootReducer;