import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import WhiteBoard from "../Components/whiteboard/WhiteBoard";
import Nav from "../Components/navbar/Nav";
import Landing from "../Components/landing/Landing";
import { v4 as uuid } from "uuid";
function Routes() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/group/" exact>
          <Redirect to={`/group/${uuid()}`} />
        </Route>
        <Route path="/group/:id" exact>
          <WhiteBoard />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
