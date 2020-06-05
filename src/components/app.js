import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './styles.scss';

import PrivateRoute from '../hoc/PrivateRoute';
import ResolveAuth from './ResolveAuth';
import Login from './Login';
import Register from './Register';
import Home from './Home';

import history from '../history';

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={ResolveAuth}/>
                <Route exact path='/login'>
                    <div className="app-wrapper">
                        <Login />
                    </div>
                </Route>
                <Route exact path='/register'>
                    <div className="app-wrapper">
                        <Register />
                    </div>
                </Route>
                <PrivateRoute exact path='/home' component={Home}/>
            </Switch>
        </Router>
    );
};

export default App;