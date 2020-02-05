import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Reports from './Reports';

const NotFound = () => {
  return (
    <p>Non Existant Route</p>
  );
}

const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reports" component={Reports} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default DashboardRouter;