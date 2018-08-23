import React from 'react';
import { Route } from 'react-router-dom';
// import Product from '../../containers/Product';
import Todo from '../../containers/Todo';

export const PRODUCT_ROUTE_PATH = '/product/:productId';

export const ProductRoute = props => (
  <Route exact path={PRODUCT_ROUTE_PATH} component={Todo} {...props} />
);

export default ProductRoute;