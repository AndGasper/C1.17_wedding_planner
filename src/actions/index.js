import axios from 'axios';
import { AUTH_USER } from './types';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://scottbowlerdev.com/api';

export function signinUser({email, password}){
    return function(dispatch){
        axios.post(`${BASE_URL}/signin`, {email, password}).then(resp => {
            dispatch({type: AUTH_USER});

            localStorage.setItem('token', resp.data.token);

            browserHistory.push('/client_login_page');
        }).catch(err => {
            dispatch(authError('Bad Login Info'));
        });
    }
}
