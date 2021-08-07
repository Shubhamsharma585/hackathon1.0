import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CombinedNav from "../Components/navbar/CombinedNav"
import Landing from "../Components/landing/Landing"
import WhiteBoard from "../Components/whiteboard/WhiteBoard"
import { v4 as uuid } from "uuid"





function Routes() {
    return ( 
        <div>
            

  <CombinedNav/>
  <Switch> 

  <Route path="/" exact>
    <Landing/> 
  </Route>


  <Route path="/group/:id" exact>
          <WhiteBoard />
  </Route>


  </Switch>
        </div>
    )

}

export default Routes;
