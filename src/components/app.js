import React from 'react';
import Header from './header';
import Footer from './footer';

const App = (props) => (
    <div>
        <Header />
        <div className='container'>
            { props.children }
        </div>
    </div>
);

export default App;