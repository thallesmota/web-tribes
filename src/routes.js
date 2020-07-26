import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
