import axios from 'axios';
import { AUTH_USER } from './types';
import { browserHistory } from 'react-router';
import firebase from 'firebase';

const BASE_URL = 'http://scottbowlerdev.com/api';

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

var config = {
    apiKey: "AIzaSyAzIwWK7eJ_djarvhS7OfdpG4YF_yL_mdY",
    authDomain: "weddingplannerinfo-914df.firebaseapp.com",
    databaseURL: "https://weddingplannerinfo-914df.firebaseio.com",
    storageBucket: "weddingplannerinfo-914df.appspot.com",
    messagingSenderId: "747671388938"
  };
  firebase.initializeApp(config);

  export function signupPlanner({name, company, email, password, websiteurl, street, city, state, zip, phoneNumber, specialty}){
    console.log('submitting...');
  };