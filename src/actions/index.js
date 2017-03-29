import axios from 'axios';
import { AUTH_USER, SET_CURRENT_CLIENT, CHANGE_CLIENT_INFO, LOGOUT_CLIENT, SET_CURRENT_PLANNER, CHANGE_PLANNER_INFO, LOGOUT_PLANNER } from './types';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://localhost:3000/api/';

export function handleProfileClick(){
    return function(dispatch){
        axios.get(`${BASE_URL}user/me`).then(response => {
            if(response.data.name){
                console.log('profile of active user:', response);
                dispatch({
                    type: SET_CURRENT_CLIENT,
                    payload: response.data
                });

                browserHistory.push('/client_login_page');
            } else {
                 return browserHistory.push('/');
            }

        }).catch(err => {
            console.log('this is error ', err);
        })
    }
}

export function plannerProfileClick(){
    return function(dispatch){
        axios.get(`${BASE_URL}wedding_planner/me`).then(response => {
            console.log(response)
            if(response.data.name) {
                dispatch({
                    type: SET_CURRENT_PLANNER,
                    payload: response.data
                });
                browserHistory.push('/planner_profile');
            } else {
                browserHistory.push('/');
            }
        }).catch((err) =>{
            console.log(err);
        });
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

export function updatePlannerDetails() {
    return function (dispatch){
        axios.get(`${BASE_URL}wedding_planner/me`).then(response => {
            dispatch({
                type: SET_CURRENT_PLANNER,
                payload: response.data
            });
            browserHistory.push('/planner_profile');
        }).catch((err) => {
            console.log('error:', err);
        });
    }
}

export function signoutClient(){
    return function(dispatch){
        axios.get(`${BASE_URL}user/logout`).then(response => {
            dispatch({type: LOGOUT_CLIENT});
            let delete_cookie = function(name) {
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            };
            delete_cookie('connect.sid');
            console.log('user has been logged out.', response)
            browserHistory.push('/');
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
        axios.post(`${BASE_URL}wedding_planner/login`, values).then(response => {
            dispatch({
                type: SET_CURRENT_PLANNER,
                payload: response.data
            });
            console.log(response);
            if(response.data === "Credentials are wrong"){
                return false;
            } else {
                browserHistory.push('/planner_profile');
            }
        }).catch(err => {
            console.log(err);
        });
    };
  }

  export function updatePlanner(values){
    return function(dispatch){
        axios.put(`${BASE_URL}wedding_planner/me`, values).then(response => {
            dispatch({type: CHANGE_PLANNER_INFO});
            browserHistory.push('/');
        }).catch((err) => {
            dispatch("error");
        });
    }
  }

//get/status to see if user is logged in. if so render home page that has profile button
// check for planner attribute in response

  export function signOutPlanner(){
      return function (dispatch){
          axios.get(`${BASE_URL}wedding_planner/logout`).then(response =>{
            dispatch({ type:LOGOUT_PLANNER });
          }).catch((err) =>{
              console.log(err);
          });
      }
  }



