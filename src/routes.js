import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Login from './components/Login';
import Contact from './components/contact';
import Home from './components/home';
import ContactInfo from './components/contact_info';
import PlannerProfile from './components/planner_profile';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Login" component={Login} />
        <Route path="contact" component={Contact} />
        <Route path="contact-info" component={ContactInfo}/>
        <Route path="planner-profile" component={PlannerProfile} />
    </Route>
);
