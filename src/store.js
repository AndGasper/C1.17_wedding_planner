import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';
import coupleData from './data/coupleData';
import images from './data/images';


import rootReducer from './reducers/index';

const defaultState = {
    coupleData,
    imageData: images
};

const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise)(createStore);

const store = createStoreWithMiddleware(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;