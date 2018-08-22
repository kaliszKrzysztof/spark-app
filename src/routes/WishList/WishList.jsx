import React from 'react';
import { Route } from 'react-router-dom';
import WishList from '../../containers/WishList';

export const WISH_LIST_ROUTE_PATH = '/wish-list';

export const WishListRoute = props => (
  <Route exact path={WISH_LIST_ROUTE_PATH} component={WishList} {...props} />
);

export default WishListRoute;