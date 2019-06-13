import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Index';
import Projects from './Projects';
import Servers from './Servers';
import ProjectView from './ProjectView';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/projects/" component={Projects} />
      <Route path="/servers/" component={Servers} />

      <Route path="/view/:project" component={ProjectView} />
      <Router component={() => <div>404 Not found 1</div>} />
    </Switch>
  );
}
