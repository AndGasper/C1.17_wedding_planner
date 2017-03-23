import axios from 'axios';
import { AUTH_USER } from './types';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://localhost:3000/api';

const instance = axios.create({
    headers: {'Content-type': 'application/x-www-form-urlencoded'}
});

export function signinClient({email, password}) {
    const request = axios.post(`${BASE_URL}/user`, {email, password});
    return {
        type: AUTH_USER,
        payload: request
    }
}

const PLANNER_URL = 'http://localhost:3000/api/';

  export function signupPlanner({email, password}){
    return function(dispatch){
        axios.post(`${PLANNER_URL}wedding_planner`, {email, password}).then(response => {
            dispatch({type: AUTH_USER});

            browserHistory.push('/planner_profile');
        }).catch((err) => {
            dispatch("error");
        });
    }
  };