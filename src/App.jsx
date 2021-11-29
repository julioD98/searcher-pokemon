import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Screens/Home";
import { Results } from "./Screens/Results";

import { NotFound } from "./Components/NotFound";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/results/:search" component={Results} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
