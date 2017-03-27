import axios from 'axios';
import { AUTH_USER, SET_CURRENT_CLIENT, CHANGE_CLIENT_INFO } from './types';
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

export function signupClient({email, password}){
    return function(dispatch){
        axios.post(`${BASE_URL}user`, {password, email}).then(response => {
            dispatch({type: AUTH_USER});
            localStorage.setItem('id', response.data._id);
            browserHistory.push('/Login');
        }).catch((err) => {
            dispatch("error");
        });
    };
}

export function signupPlanner({email, password}){
    return function(dispatch){
        axios.post(`${BASE_URL}wedding_planner`, {password, email}).then(response => {
            dispatch({type: AUTH_USER});
            localStorage.setItem('id', response.data._id);
            browserHistory.push('/planner_login');
        }).catch((err) => {
            dispatch("error");
        });
    };
  }

export function updateClient({name, email, phoneNumber}){
    return function(dispatch){
        var id = localStorage.getItem('id');
        axios.put(`${BASE_URL}user/${id}`, {name, email, phoneNumber }).then(response => {
            dispatch({type: CHANGE_CLIENT_INFO});
            browserHistory.push('/Login');
        }).catch((err) => {
            dispatch("error");
        });
    }
}

  export function plannerLogin(values){
      const id = localStorage.getItem('id');
      return function(dispatch){
        axios.get(`${BASE_URL}wedding_planner`).then(resp => {
            for(let i=0; i< resp.data.length; i++){
                if(resp.data[i].email === values.email){
                    console.log('User\'s info: ', resp.data[i]);
                    dispatch({
                        type: SET_CURRENT_CLIENT,
                        payload: resp.data[i]
                    });
                }
            }
            browserHistory.push('/planner_profile');

            
        }).catch(err => {
            console.log(err);
        });
    };
  }

  export function updatePlanner({name, website, description}){
    return function(dispatch){
        var id = localStorage.getItem('id');
        axios.put(`${BASE_URL}wedding_planner/${id}`, {name, website, description}).then(response => {
            dispatch({type: AUTH_USER});
            browserHistory.push('/planner_profile');
        }).catch((err) => {
            dispatch("error");
        });
    }
  }

export function updateClientInfo(values){
    return function(dispatch){
        console.log('hello');
    }
}

