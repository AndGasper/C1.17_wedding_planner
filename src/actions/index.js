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

export function signinClient({email, password}) {
    const request = axios.post(`${BASE_URL}/user`, {email, password});
    return {
        type: AUTH_USER,
        payload: request
    }
}