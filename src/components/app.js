import React from 'react';
import styles from './app.css';
import NavLink from './nav_link';

const container = ' container';

this.state = {
    name: '',
    age: ''
};

const App = (props) => (
    <div className={styles.app + container}>
        { props.children }
    </div>
);

export default App;