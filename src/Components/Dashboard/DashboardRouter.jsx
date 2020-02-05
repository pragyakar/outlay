import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const NotFound = () => {
  return (
    <p>Non Existant Route</p>
  );
}

const DashboardRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NotFound} />
        <Route exact path="/reports" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default DashboardRouter;