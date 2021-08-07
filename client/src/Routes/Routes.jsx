import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../Components/navbar/Nav";
import Landing from "../Components/landing/Landing";
import CreateRoom from "../Components/video/CreateRoom";
import Room from "../Components/video/Room";

function Routes() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/room/:roomID" component={Room} />
      </Switch>
    </div>
  );
}

export default Routes;
