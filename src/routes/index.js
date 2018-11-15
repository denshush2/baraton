import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import Home from "../components/Home/Home";

console.log("store", store);
const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {/* <Route path="/" exact render={props => <Home {...props} />} /> */}
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
