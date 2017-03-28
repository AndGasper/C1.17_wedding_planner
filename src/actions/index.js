import axios from 'axios';
import { AUTH_USER, SET_CURRENT_CLIENT, CHANGE_CLIENT_INFO, LOGOUT_CLIENT } from './types';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://localhost:3000/api/';

export function handleProfileClick(){
    return function(dispatch){
        axios.get(`${BASE_URL}user/me`).then(response => {
            console.log('profile of active user:', response);
            dispatch({
                type: SET_CURRENT_CLIENT,
                payload: response.data
            });
            browserHistory.push('/client_login_page');
        }).catch(err => {
            console.log('this is error ', err);
        })
    }
}

export function ClientSignin(values){
    return function(dispatch){
        let email = values.email;
        let password = values.password;
        axios.post(`${BASE_URL}user/login`, {email, password}).then(response => {
            dispatch({
                type: SET_CURRENT_CLIENT,
                payload: response.data
            });
            if(response.data === 'Credentials are wrong'){
                window.alert('Email or Password is incorrect, Try Again');
            } else {
                console.log('user that logged in: ', response.data);
                localStorage.setItem('id', response);
                browserHistory.push('/client_login_page');
            }

        }).catch(err => {
            console.log('this is error ', err);
        })
    }
}

export function signupClient({email, password}){
    return function(dispatch){
        axios.post(`${BASE_URL}user`, {password, email}).then(response => {
            dispatch({type: AUTH_USER});
            browserHistory.push('/Login');
        }).catch((err) => {
            dispatch("error");
        });
    };
}

export function signoutClient(){
    return function(dispatch){
        axios.get(`${BASE_URL}user/logout`).then(response => {
            dispatch({type: LOGOUT_CLIENT});
            console.log('user has been logged out.', response)
        }).catch(err => {
            console.log('Error logging out', err)
        })
    }

    //do get request to /api/user/logout
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

export function updateClient(values){
    return function(dispatch){
        let email = values.email;
        let name = values.name;
        let phoneNumber = values.phoneNumber;
        console.log(values);
        axios.put(`${BASE_URL}user/me`, {name,email, phoneNumber}).then(response => {
            dispatch({type: CHANGE_CLIENT_INFO});
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
            browserHistory.push('/');
        }).catch((err) => {
            dispatch("error");
        });
    }
  }


//post api/user/login {email, password}
//resp > user info

