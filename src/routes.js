import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Login from './components/Login';
import ClientLogin from './components/client_login_page';
import Home from './components/home';
import PlannerProfile from './components/planner_profile';
import PlannerPageLogin from './components/plannerPageLogin';
import QuestionPage from './components/questions';
import CostPage from './components/cost';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Login" component={Login} />
        <Route path="client_login_page" component={ClientLogin} />
        <Route path="planner-profile" component={PlannerProfile} />
        <Route path="plannerPageLogin" component={PlannerPageLogin} />
        <Route path="questions" component={QuestionPage} />
        <Route path="cost" component={CostPage} />
    </Route>
);
