import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Register } from "../../pages";
import MainApp from "../../pages/MainApp";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainApp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
