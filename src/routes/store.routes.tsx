/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import CatalogPage from '../pages/Catalog';

const CheckoutPage = lazy(() => import('../pages/Checkout/'));

const ConfirmationPage = lazy(() => import('../pages/Confirmation/'));

export const STORE_PATH = {
  Catalog: '/',
  Checkout: '/store-checkout/:id',
  Confirmation: '/confirmation',
} as const;

export const ApplicationStoreRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={STORE_PATH.Catalog} component={CatalogPage} />

      <Route exact path={STORE_PATH.Checkout} component={CheckoutPage} />

      <Route exact path={STORE_PATH.Confirmation} component={ConfirmationPage} />
    </Switch>
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
