import React from 'react';
import { Switch, Route } from 'react-router-dom';

const ContentPanel = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/" component={add} />
        <Route path="/add" component={add} />
        <Route path="/history" component={history} />
        <Route path="/reports" component={reports} />
        <Route path="/statistics" component={statistics} />
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

const statistics = () => {
  return ( <p>Statistics</p> )
}

export default ContentPanel;