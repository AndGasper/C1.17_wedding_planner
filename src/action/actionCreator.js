import {UPDATE_PREFS, SEND_PREFS_TO_SERVER} from '../action/types'


const BASE_URL = 'http://localhost:8000/api';

export function updatePrefs(category, imageValue) {
    return {
        type: UPDATE_PREFS,
        payload: {category, imageValue}
    }
}

export function sendPrefsToServer(prefs) {

    return function (dispatch) {
        axios.put(`${BASE_URL}/updatePrefs`, prefs).then(resp => {
            console.log('axios update success', resp);
            axios.get(`${BASE_URL}/getPrefs`).then(resp => {
                console.log('axios get success', resp);
                dispatch({type: GET_COUPLE_PROFILE, payload: resp});
                history.push('/console');
            });
        }).catch(err => {
            console.log('axios failure', err);
        })
    };
}