import React from 'react';
import styles from './app.css';
import NavLink from './nav_link';

const About = () => (
    <div className = {styles.loginPage}>
       <h2>Login</h2>
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
            <button className="btn btn-primary"><NavLink to="/contact">Log in</NavLink></button>
            <button className='btn btn-primary'><NavLink to='/planner-profile'>Profile</NavLink></button>
            <br/>
            <br/>
            <br/>
            <button className="btn btn-info">Log in With Facebook</button>
            <br/>
            <br/>
            <button className="btn btn-info">Log in With Google</button>
            <NavLink to="/" >Back to Home</NavLink>
        </div>
    </div>
);

export default About;