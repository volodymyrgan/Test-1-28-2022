import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router';
import { withRouter } from 'react-router-dom'
import Homepage from '../containers/Homepage';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Dashboard from '../containers/Dashboard';
import NotFound from '../screens/NotFound';

class RouterComponent extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path={`/`} exact component={Homepage} />
                    <Route path={`/login`} exact component={Login} />
                    <Route path={`/signup`} exact component={Signup} />
                    <Route path={`/dashboard`} exact component={Dashboard} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}
export default withRouter(RouterComponent);
