import { Route } from 'react-router-dom';
import React from 'react';
// import Login from '../../containers/Login';
import Todo from '../../containers/Todo';

export const LOGIN_ROUTE_PATH = '/login';

export const LoginRoute = props => (
  <Route exact path={LOGIN_ROUTE_PATH} component={Todo} {...props} />
);

export default LoginRoute;