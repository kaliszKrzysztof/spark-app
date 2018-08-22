import React from 'react';
import { Route } from 'react-router-dom';
import Product from '../../containers/Product';

export const PRODUCT_ROUTE_PATH = '/product/:productId';

export const ProductRoute = props => (
  <Route exact path={PRODUCT_ROUTE_PATH} component={Product} {...props} />
);

export default ProductRoute;