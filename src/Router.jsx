import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OldDashboard from './OldComponents/Dashboard';
import Dashboard from './Components/Dashboard';

const NotFound = () => {
  return (
    <p>Non Existant Route</p>
  );
}

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/v1" component={OldDashboard} />
        <Route path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;