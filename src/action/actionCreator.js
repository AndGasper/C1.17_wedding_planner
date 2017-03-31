import {UPDATE_PREFS, GET_COUPLE_PROFILE, GET_PLANNERS_FROM_SERVER} from '../action/types';
import axios from 'axios';
import {history} from '../store';


const BASE_URL = 'http://localhost:3000/api';

export function updatePrefs(category, imageValue) {
    // 
    return {
        type: UPDATE_PREFS,
        payload: {category, imageValue}
    }
}

export function sendPrefsToServer(prefs) {

    return function (dispatch) {
        axios.post(`${BASE_URL}/search`, prefs).then(resp => {
            // 
            }).catch(err => {
            // 
        })
    };

}

export function getPlannersFromServer() {
    return function (dispatch) {
        axios.get('http://planningthedate.com/api/wedding_planner/predetermined').then((resp) => {
            dispatch({
                type: GET_PLANNERS_FROM_SERVER,
                payload: resp
            })
        })
    }
}