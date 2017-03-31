import axios from 'axios';
import { FETCH_PLANNER1, UNAUTH_USER, AUTH_ERROR, AUTH_USER, SET_CURRENT_CLIENT,
    CHANGE_CLIENT_INFO, LOGOUT_CLIENT, SET_CURRENT_PLANNER, CHANGE_PLANNER_INFO,
    LOGOUT_PLANNER, FETCH_PLANNER2, FETCH_PLANNER3, FETCH_PLANNER4, FETCH_PLANNER5, FETCH_PLANNER6 } from './types';
import { browserHistory } from 'react-router';

const BASE_URL = '/api/';

export function handleProfileClick() {
    return function(dispatch){
        axios.get(`${BASE_URL}user/me`).then(response => {
            if(response.data.name !== undefined) {
                dispatch({
                    type: SET_CURRENT_CLIENT,
                    payload: response.data
                });
                dispatch({ type: AUTH_USER});
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
            console.log(err);
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
            dispatch({ type: LOGOUT_CLIENT });
            dispatch({ type: UNAUTH_USER });
            let delete_cookie = function(name) {
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            };
            delete_cookie('connect.sid');
            console.log('User has been logged out.');
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
            if(response.data === 'Credentials are wrong'){
                dispatch(authError('bad login info'))
            } else {
                dispatch({
                    type: AUTH_USER
                });
                browserHistory.push('/planner_profile');
            }
        }).catch(err => {
            console.log(err);
        });
    };
  }

  export function updatePlanner(values){
    debugger;
    return function(dispatch){
        axios.put(`${BASE_URL}wedding_planner/me`, values).then(response => {
            dispatch({type: CHANGE_PLANNER_INFO});
            browserHistory.push('/');
        }).catch((err) => {
            dispatch("error");
        });
    }
  }


  export function signOutPlanner(){
      return function (dispatch){
          axios.get(`${BASE_URL}wedding_planner/logout`).then(response =>{
            dispatch({ type: LOGOUT_PLANNER });
            dispatch({ type: UNAUTH_USER });
          }).catch((err) =>{
              console.log(err);
          });
      }
  }

  export function addPlannersToClient(plannerToAdd){
      return function(dispatch){
          let id = {
              planner: plannerToAdd._id
          };
          axios.put(`${BASE_URL}user/me/planner`, id).then(response => {
              dispatch({CHANGE_CLIENT_INFO});
          }).catch((err) => {
              dispatch('error');
          })
      }
  }

  export function fetchPlanner1(id){
    return function(dispatch){
        axios.get(`${BASE_URL}user/me/${id}`).then(response => {
            dispatch({
                type: FETCH_PLANNER1,
                payload: response.data
            })
        }).catch((err) =>{
            dispatch('error');
        })
    }
}
export function fetchPlanner2(id){
    return function(dispatch){
        axios.get(`${BASE_URL}user/me/${id}`).then(response => {
            dispatch({
                type: FETCH_PLANNER2,
                payload: response.data
            })
        }).catch((err) =>{
            dispatch('error');
        })
    }
}
export function fetchPlanner3(id){
    return function(dispatch){
        axios.get(`${BASE_URL}user/me/${id}`).then(response => {
            dispatch({
                type: FETCH_PLANNER3,
                payload: response.data
            })
        }).catch((err) =>{
            dispatch('error');
        })
    }
}export function fetchPlanner4(id){
    return function(dispatch){
        axios.get(`${BASE_URL}user/me/${id}`).then(response => {
            dispatch({
                type: FETCH_PLANNER4,
                payload: response.data
            })
        }).catch((err) =>{
            dispatch('error');
        })
    }
}export function fetchPlanner5(id){
    return function(dispatch){
        axios.get(`${BASE_URL}user/me/${id}`).then(response => {
            dispatch({
                type: FETCH_PLANNER5,
                payload: response.data
            })
        }).catch((err) =>{
            dispatch('error');
        })
    }
}export function fetchPlanner6(id){
    return function(dispatch){
        axios.get(`${BASE_URL}user/me/${id}`).then(response => {
            dispatch({
                type: FETCH_PLANNER6,
                payload: response.data
            })
        }).catch((err) =>{
            dispatch('error');
        })
    }
}





