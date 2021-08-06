import React from "react";
import { Route, Switch } from "react-router-dom";
import WhiteBoard from "../Components/whiteboard/WhiteBoard";
import Nav from "../Components/navbar/Nav";
import Landing from "../Components/landing/Landing";

function Routes() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>

        <Route path="/group" exact>
          <WhiteBoard />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
