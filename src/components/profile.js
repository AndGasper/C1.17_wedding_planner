import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './app.css';

class clientLogin extends Component {
    render() {
        return (
            <div>
                <h1 id="client-name">Welcome Back</h1>
                <div>
                    <div id="client-info">
                        <h2 className="client-about">About You</h2>
                        <h4 className="user-labels">Name</h4>
                        <h4 className="client-spec">a</h4>
                        <h4 className="user-labels">Email</h4>
                        <h4 className="client-spec">b</h4>
                        <h4 className="user-labels">Phone Number</h4>
                        <h4 className="client-spec">c</h4>
                        <h4 className="user-labels">Facebook Profile</h4>
                        <h4 className="client-spec">d</h4>
                    </div>
                    <div id="client-pref">
                        <h2 className="client-about">Preferences</h2>
                        <h4 className="user-labels">Images</h4>
                        <h4 className="client-spec">a</h4>
                        <h4 className="user-labels client-hide">Email</h4>
                        <h4 className="client-spec client-hide">b</h4>
                        <h4 className="user-labels client-hide">Phone Number</h4>
                        <h4 className="client-spec client-hide">c</h4>
                        <h4 className="user-labels">Summary</h4>
                        <h4 className="client-spec">d</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default clientLogin;