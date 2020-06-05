import React from 'react';
import { Redirect, Route } from 'react-router';

import { getUserInfo } from '../helpers/userHelper';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                getUserInfo() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;