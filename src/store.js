// import modules
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';
//import components
import coupleData from './data/coupleData';
import images from './data/images';
import PlannerSignup from './components/auth/plannerSignup';
import rootReducer from './reducers';

const defaultState = {
    coupleData,
    imageData: images
    
};

const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise)(createStore);

const store = createStoreWithMiddleware(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;