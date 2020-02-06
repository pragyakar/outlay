import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Reports from './Reports';
import Settings from './Settings';

const NotFound = () => {
  return (
    <div>Non Existant Route</div>
  );
}

const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default DashboardRouter;