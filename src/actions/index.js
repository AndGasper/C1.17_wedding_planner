import axios from 'axios';
import { AUTH_USER, FETCH_CLIENT_INFO } from './types';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://localhost:3000/api';

const instance = axios.create({
    headers: {'Content-type': 'application/x-www-form-urlencoded'}
});

export function fetchClientInfo(){
    const request = instance.get(`${BASE_URL}/user`);
    return {
        type: FETCH_CLIENT_INFO,
        payload: request
    }
}

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