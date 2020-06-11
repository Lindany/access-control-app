import React from "react";
import { Switch } from "react-router-dom";
import Route from "./routes";

import SignIn from '../signin/Login';
import SignUp from '../signin/Signin';
import Dashboard from '../main/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard}  />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}
