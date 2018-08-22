import { Route } from 'react-router-dom';
import React from 'react';
import Login from '../../containers/Login';

export const LOGIN_ROUTE_PATH = '/login';

export const LoginRoute = props => (
  <Route exact path={LOGIN_ROUTE_PATH} component={Login} {...props} />
);

export default LoginRoute;