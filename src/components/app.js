import React from 'react';
import styles from './app.css';
import Header from './header';
import Footer from './footer';

const container = ' container';
if (window.location.hash && window.location.hash == '#_=_') {
    window.location.hash = '';
}

const App = (props) => (
    <div>
        <Header />
        <div className={styles.app + container}>
            { props.children }
        </div>
    </div>
);

export default App;