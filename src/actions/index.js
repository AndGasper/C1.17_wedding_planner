import axios from 'axios';
import { UNAUTH_USER, AUTH_ERROR, AUTH_USER, SET_CURRENT_CLIENT, CHANGE_CLIENT_INFO, LOGOUT_CLIENT, SET_CURRENT_PLANNER, CHANGE_PLANNER_INFO, LOGOUT_PLANNER } from './types';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://localhost:3000/api/';

export function handleProfileClick() {
    return function(dispatch){
        axios.get(`${BASE_URL}user/me`).then(response => {
            if(response.data.name !== undefined) {
                dispatch({
                    type: SET_CURRENT_CLIENT,
                    payload: response.data
                });
                browserHistory.push('/client_login_page');
            } else {
                browserHistory.push('/');
            }
        }).catch((err) =>{
            return;
        });
    }
}

export function plannerProfileClick(){
    return function(dispatch){
        axios.get(`${BASE_URL}wedding_planner/me`).then(response => {
            if(response.data.name !== undefined) {
                dispatch({
                    type: SET_CURRENT_PLANNER,
                    payload: response.data
                });
                browserHistory.push('/planner_profile');
            } else {
                browserHistory.push('/');
            }
        }).catch((err) =>{
            dispatch('error');
        });
    }
}
export function authError(err){
    return {
        type: AUTH_ERROR,
        payload: err
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
                dispatch(authError('bad login info'))
            } else {
                dispatch({
                    type: AUTH_USER
                });
                localStorage.setItem('id', response);
                browserHistory.push('/client_login_page');
            }
        }).catch(err => {
            dispatch('error');
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
            dispatch('error');
        });
    }
}

export function signoutClient(){
    return function(dispatch){
        axios.get(`${BASE_URL}user/logout`).then(response => {
            dispatch({ type: LOGOUT_CLIENT });
            dispatch({ type: UNAUTH_USER });
            let delete_cookie = function(name) {
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            };
            delete_cookie('connect.sid');
            browserHistory.push('/');
        }).catch(err => {
            dispatch("error");
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
        axios.put(`${BASE_URL}user/me`, {name,email, phoneNumber}).then(response => {
            dispatch({type: CHANGE_CLIENT_INFO});
        }).catch((err) => {
            dispatch("error");
        });
    }
}

/*export function plannersToClient(plannerToAdd){
    
    return function(dispatch){
        let id ={
            'planner': '58dc57728ad5402a449b791d'
        } ;
        axios.put(`${BASE_URL}user/me/planner`, id).then(response => {
            
            
            dispatch({type: CHANGE_CLIENT_INFO});
        }).catch((err) => {
            dispatch('error');
        })
    }
}*/

  export function plannerLogin(values){
      const id = localStorage.getItem('id');
      return function(dispatch){
        axios.post(`${BASE_URL}wedding_planner/login`, values).then(response => {
            dispatch({
                type: SET_CURRENT_PLANNER,
                payload: response.data
            });
            if(response.data === 'Credentials are wrong'){
                dispatch(authError('bad login info'))
            } else {
                dispatch({
                    type: AUTH_USER
                });
                browserHistory.push('/planner_profile');
            }
        }).catch(err => {
            dispatch('error');
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
            dispatch({ type: LOGOUT_PLANNER });
            dispatch({ type: UNAUTH_USER });
          }).catch((err) =>{
              dispatch('error');
          });
      }
  }
  //build out component results page with info from api/weddingplanner/

  //send id to api/user/me/:id
