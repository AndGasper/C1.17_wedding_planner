import React from 'react';
import styles from '../app.css';
import NavLink from '../nav_link';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    margin: 12,
};

const paperStyle = {
    width: 300,
    backgroundColor: 'white',
    color: 'gray',
    padding: '10px',
    fontSize: '.9em'

};

const plannerPageLogin = () => (
    <div className = {styles.loginPage}>
        <h2>Wedding Planner Login</h2>
        <div>
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

            <Link to="/planner_profile"><RaisedButton label="Login" secondary={true} style={style}/></Link>
            <br />
            <Link to="/planner_signup"><RaisedButton label="Sign Up" secondary={true} style={style}/></Link>

            <br/>
            <NavLink to="/" >Back to Home</NavLink>
        </div>
    </div>
);

export default plannerPageLogin;