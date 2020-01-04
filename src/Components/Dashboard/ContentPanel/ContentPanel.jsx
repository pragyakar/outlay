import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const ContentPanel = () => {
  return (
    <div className="main-container">
      <Switch>
        <Redirect from="/" exact to="/add" />
        <Route path="/add" component={add} />
        <Route path="/history" component={history} />
        <Route path="/reports" component={reports} />
        <Redirect to={'/add'} />
      </Switch>
    </div>
  );
}

const add = () => {
  return ( <p>Add</p> )
}

const history = () => {
  return ( <p>History</p> )
}

const reports = () => {
  return ( <p>Reports</p> )
}
export default ContentPanel;