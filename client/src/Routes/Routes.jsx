import React from 'react'
import { Route, Switch } from "react-router-dom";
import CombinedNav from "../Components/navbar/CombinedNav"
import Landing from "../Components/landing/Landing"
import Board from '../Components/Board/Board';


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






  </Switch>
        </div>
    )
}

export default Routes
