import React from 'react';
import styles from './app.css';

const container = ' container';


const App = (props) => (
    <div className={styles.app + container}>
        { props.children }
    </div>
);

export default App;