import axios from 'axios';
import { AUTH_USER, SET_CURRENT_CLIENT, CHANGE_CLIENT_INFO, LOGOUT_CLIENT, SET_CURRENT_PLANNER, CHANGE_PLANNER_INFO } from './types';
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
        let name = values.name;
        let website = values.website;
        let description = values.description;
        axios.put(`${BASE_URL}wedding_planner/me`, {name, website, description}).then(response => {
            dispatch({type: CHANGE_PLANNER_INFO});
            browserHistory.push('/');
        }).catch((err) => {
            dispatch("error");
        });
    }
  }

  /*export function getCookie(cname) {
      return function(dispatch){
          var name = cname + "=";
          var decodedCookie = decodeURIComponent(document.cookie);
          var ca = decodedCookie.split(';');
          for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                  c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
              }
          }
          return "";
      }

}*/

//post api/user/login {email, password}
//resp > user info

