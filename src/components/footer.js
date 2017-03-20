import React from 'react';
import styles from './app.css';

const Footer = () => (
    <div className={`${styles.footer}`}>
        <div className='container'>
            <ul className='float-left list-group list-unstyled'>
                <a href="contact"><li>Contact Us</li></a>
                <a href="contact"><li>Contact Us</li></a>
                <a href="contact"><li>Contact Us</li></a>
                <a href="contact"><li>Contact Us</li></a>
            </ul>
        </div>
        <div className='text-center'>
            <p>Matchromonie</p>
            <p>9080 Irvine Center Dr Suite# 200</p>
            <p>Irvine, CA 92618</p>
            <p>949-679-7699</p>
        </div>
    </div>
);

export default Footer;