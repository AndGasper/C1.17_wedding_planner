import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promise from 'redux-promise';


import rootReducer from './reducers/index';

const defaultState = {
    coupleData: [
        {
            husbandName: 'miguel',
            wifeName: 'shanaynay'
        },
        {
            husbandName: 'tyrone',
            wifeName: 'shadyNasty'
        }
    ]
};

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStoreWithMiddleware(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;