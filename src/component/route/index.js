import React from "react";
import { Switch } from "react-router-dom";
import Route from "./routes";

import Login from '../signin/Login';
import Signin from '../signin/Signin';
import Dashboard from '../main/Main';
import RegisterUser from '../user/AddUser';
import ViewUsers from '../user/ViewUser';
import StreamVideo from '../video/Video';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Signin} />
      <Route path="/adduser" component={RegisterUser} />
      <Route path="/viewuser" component={ViewUsers} />
      <Route path="/videostream" component={StreamVideo} />

      <Route path="/dashboard" component={Dashboard}  />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Dashboard} />
    </Switch>
  );
}

