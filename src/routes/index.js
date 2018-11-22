import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import Home from "../components/Home/Home";
import Section from "../components/Section/Section";

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {/* <Route path="/" exact render={props => <Home {...props} />} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
