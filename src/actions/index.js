import axios from 'axios';
import { AUTH_USER, SET_CURRENT_CLIENT } from './types';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://localhost:3000/api/';

export function signinClient(values){
    return function(dispatch){
        const request = axios.get(`${BASE_URL}user`).then(resp => {
            for(let i=0; i< resp.data.length; i++){
                if(resp.data[i].email === values.email){
                    console.log('User\'s info: ', resp.data[i]);
                    dispatch({
                        type: SET_CURRENT_CLIENT,
                        payload: resp.data[i]
                    })
                }
            }
            browserHistory.push('/client_login_page');

            
        }).catch(err => {
            console.log(err);
        });
    }
}

export function signupPlanner({email, password}){
    return function(dispatch){
        axios.post(`${BASE_URL}wedding_planner`, {password, email}).then(response => {
            dispatch({type: AUTH_USER});
            browserHistory.push('/planner_details');
        }).catch((err) => {
            dispatch("error");
        });
    }
  };

  export function updatePlanner({name, website, description}){
    return function(dispatch){
        axios.put(`${BASE_URL}wedding_planner`, {name, website, description}).then(response => {
            dispatch({type: AUTH_USER});
            browserHistory.push('/planner_profile');
        }).catch((err) => {
            dispatch("error");
        });
    }
  };

