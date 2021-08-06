import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "../Compo/home/Home"
import Nav from "../Compo/navbar/Nav"
import WhiteBoard from '../Compo/whiteboard/WhiteBoard';



function Routes() {
    return (
        <div>
            

  <Nav/>
  <Switch> 

  <Route path="/" exact>
    <Home/>
  </Route>

  <Route path="/group" exact>
    <WhiteBoard/>
  </Route>








  </Switch>
        </div>
    )
}

export default Routes
