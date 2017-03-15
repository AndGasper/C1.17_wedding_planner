import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coupleData from './coupleReducer';
import plannerData from './plannerReducer';

const rootReducer = combineReducers({coupleData, plannerData, routing: routerReducer});

export default rootReducer;