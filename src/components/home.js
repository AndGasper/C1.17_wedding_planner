import React from 'react';
import styles from './app.css';
import NavLink from './nav_link';

const Home = () => (
    <div className={styles.homePage} >
        <div>
            <h1>Wedding Planner Finder</h1>
            <button className='btn btn-info'><NavLink to="/Login">Login</NavLink></button>
            <br/>
            <br/>
            <button className='btn btn-info'><NavLink to="/Contact">Get Started</NavLink></button>
            <NavLink className=' planner_login' to="/plannerPage">Wedding Planner? Log in Here</NavLink>
        </div>
    </div>
);

export default Home;