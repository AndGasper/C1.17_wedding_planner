import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
=======
import { Router, Route, IndexRoute } from 'react-router';
>>>>>>> materialUI
import store, { history } from './store';
import App from './components/app';
import Home from './components/home';
import Login from './components/Login';
import PlannerProfile from './components/planner_profile';
import PlannerPageLogin from './components/auth/plannerPageLogin';
import QuestionPage from './components/questions';
import ClientLogin from './components/client_login_page';
import PlannerSignup from './components/auth/plannerSignup';
import PlannerDetails from './components/auth/plannerDetails';
import CostPage from './components/cost';


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
                <Route path='planner_signup' component={PlannerSignup} />
                <Route path='planner_details' component={PlannerDetails} />
                <Route path="cost" component={CostPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);