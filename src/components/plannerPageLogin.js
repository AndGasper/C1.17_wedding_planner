import React from 'react';
import NavLink from './nav_link';

const plannerPageLogin = () => (
    <div>
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

            <button className="btn btn-info"><NavLink to="/planner-profile">Log in</NavLink></button>

            <br/>
            <NavLink to="/" >Back to Home</NavLink>
        </div>
    </div>
);

export default plannerPageLogin;