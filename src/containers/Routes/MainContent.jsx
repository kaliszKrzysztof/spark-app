import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import NotFound from '../NotFound';

const MainContent = props => (
  <Switch>
    {routes.map(
      // eslint-disable-next-line react/no-array-index-key
      (route, idx) => route({ ...props, key: idx }),
    )}
    <Route component={() => <NotFound />} />
  </Switch>
);

export default MainContent;