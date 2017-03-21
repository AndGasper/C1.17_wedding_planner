import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './app.css';

class clientLogin extends Component {
    render() {
        return (
            <div className={styles.client}>
                <h1>Welcome (Client)</h1>
                <div className="info-section">
                    <p>Hello there</p>
                </div>
            </div>
        )
    }
}

export default clientLogin;