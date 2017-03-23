import React from 'react';
import styles from '../app.css';
import NavLink from '../nav_link';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const plannerPageLogin = () => (
    <div className = {styles.loginPage}>
        <h2>Wedding Planner Login</h2>
        <div className = {styles.formDiv}>
            <form>
                <br/>
                <label htmlFor="username">Username:</label>
                <input id="username" type="text"/>
                <br/>
                <br/>
                <label htmlFor="password"> Password: </label>
                <input id="password" type="password"/>
                <br/>
                <br/>
            </form>

            <button className="btn btn-info"><NavLink to="/planner_profile">Log in</NavLink></button>
            <button className='btn btn-info'><NavLink to='/planner_signup'>Sign Up</NavLink></button>

            <br/>
            <NavLink to="/" >Back to Home</NavLink>
        </div>
    </div>
);

export default plannerPageLogin;