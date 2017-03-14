import React, { Component } from 'react';
import styles from './app.css';
import NavLink from './nav_link';

class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={styles.homePage} >
                <div>
                    <h1>Wedding Planner Finder</h1>
                    <button className='btn btn-info'><NavLink to="/Login">Login</NavLink></button>
                    <br/>
                    <br/>
                    <button className='btn btn-info'><NavLink to="/questions">Get Started</NavLink></button>
                    <NavLink className=' planner_login' to="/plannerPageLogin">Wedding Planner? Log in Here</NavLink>
                </div>
            </div>
        )
    }
}

export default Home;