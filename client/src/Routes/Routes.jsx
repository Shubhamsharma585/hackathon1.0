import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "../Compo/home/Home"
import Nav from "../Compo/navbar/Nav"



function Routes() {
    return (
        <div>
            

  <Nav/>
  <Switch> 

  <Route path="/" exact>
    <Home/>
  </Route>









  </Switch>
        </div>
    )
}

export default Routes
