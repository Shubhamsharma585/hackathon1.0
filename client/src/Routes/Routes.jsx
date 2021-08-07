import React from "react";
import { Route, Switch } from "react-router-dom";
import CombinedNav from "../Components/navbar/CombinedNav"
import Landing from "../Components/landing/Landing"
import Board from '../Components/Board/Board';
import Room from "../Components/video/Room";
import CreateRoom from "../Components/video/CreateRoom";


function Routes() {
    return ( 
        <div>
            

  <CombinedNav/>
  <Switch> 

  <Route path="/" exact>
    <Landing/>
  </Route>


  <Route path="/Group/:id" exact>
    <Board/>
  </Route>

  <Route path="/room/:roomID" component={Room} />




  </Switch>
        </div>
    )

}

export default Routes;
