/* eslint-disable react/jsx-indent */
import React, { Suspense } from 'react';
import { LinearProgress } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { STORE_PATH, ApplicationStoreRoutes } from './store.routes';

export const Routes = () => {
  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path={STORE_PATH.Catalog} component={ApplicationStoreRoutes} />

        <Route exact path={STORE_PATH.Checkout} component={ApplicationStoreRoutes} />
      </Switch>
    </BrowserRouter>
  );

  return (
    <Suspense
      fallback={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          <LinearProgress color="primary" />
          <LinearProgress color="primary" />
        </>
      }>
      {routes}
    </Suspense>
  );
};
