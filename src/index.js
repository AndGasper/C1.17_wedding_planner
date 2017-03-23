import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';
import App from './components/app';
import Home from './components/home';
import Login from './components/Login';
import NavLink from './components/nav_link';
import PlannerProfile from './components/planner_profile';
import PlannerPageLogin from './components/auth/plannerPageLogin';
import QuestionPage from './components/questions';
import QuestionImages from './components/questionsImages';
import ClientLogin from './components/client_login_page';
import PlannerSignup from './components/auth/plannerSignup';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="Login" component={Login} />
                <Route path="client_login_page" component={ClientLogin} />
                <Route path="planner_profile" component={PlannerProfile} />
                <Route path="plannerPageLogin" component={PlannerPageLogin} />
                <Route path="questions" component={QuestionPage} />
                <Route path='planner_signup' component={PlannerSignup} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);