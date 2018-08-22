import { Route } from 'react-router-dom';
import React from 'react';
import Products from '../../containers/Products';

export const PRODUCTS_ROUTE_PATH = '/';

export const ProductsRoute = props => (
  <Route exact path={PRODUCTS_ROUTE_PATH} component={Products} {...props} />
);

export default ProductsRoute;