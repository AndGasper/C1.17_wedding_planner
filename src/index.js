import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NavLink from './components/nav_link';
import store, { history } from './store';
import App from './components/app';
import Home from './components/home';
import Login from './components/auth/Login';
import PlannerProfile from './components/planner_profile';
import PlannerPageLogin from './components/auth/plannerPageLogin';
import QuestionPage from './components/questions';
import QuestionImages from './components/questionsImages';
import ClientLogin from './components/auth/client_login_page';
import PlannerSignup from './components/auth/plannerSignup';
import CostPage from './components/cost';
import EditClientInfo from './components/auth/edit_client_info';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="Login" component={Login} />
                <Route path="client_login_page" component={ClientLogin} />
                <Route path="planner-profile" component={PlannerProfile} />
                <Route path="plannerPageLogin" component={PlannerPageLogin} />
                <Route path="questions" component={QuestionPage} />
                <Route path="cost" component={CostPage} />
                <Route path="edit_client_info" component={EditClientInfo} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);