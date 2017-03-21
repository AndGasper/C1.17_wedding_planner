import React from 'react';
import styles from './app.css';
import Header from './header';
import Footer from './footer';

const container = ' container';


const App = (props) => (
    <div>
        <Header />
        <div className={styles.app + container}>
            { props.children }
        </div>
        <Footer />
    </div>
);

export default App;