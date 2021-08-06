import React from 'react'
import { Route, Switch } from "react-router-dom";
import Nav from "../Compo/navbar/Nav"
import Landing from "../Compo/landing/Landing"


function Routes() {
    return (
        <div>
            

  <Nav/>
  <Switch> 

  <Route path="/" exact>
    <Landing/>
  </Route>









  </Switch>
        </div>
    )
}

export default Routes
