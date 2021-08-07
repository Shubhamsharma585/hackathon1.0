import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/home/Home";
import Nav from "../Components/navbar/Nav";

function Routes() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
