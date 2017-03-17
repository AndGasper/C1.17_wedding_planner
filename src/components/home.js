import React, { Component } from 'react';
import styles from './app.css';
import { Link } from 'react-router';

class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={styles.homePage} >
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button className='btn btn-info'><Link to="/questions">Get Started</Link></button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link className=' planner_login' to="/plannerPageLogin">Wedding Planner? Log in Here</Link>
                </div>
            </div>
        )
    }
}

export default Home;