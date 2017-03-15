import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coupleData from './coupleReducer';
import plannerData from './plannerReducer';
import imageData from './imageReducer';

const rootReducer = combineReducers({coupleData, plannerData, imageData, routing: routerReducer});

export default rootReducer;