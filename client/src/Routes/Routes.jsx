import React from "react";
import { Route, Switch } from "react-router-dom";
import CombinedNav from "../Components/navbar/CombinedNav"
import Landing from "../Components/landing/Landing"
import WhiteBoard from "../Components/whiteboard/WhiteBoard"
import Chat from "../Components/chat/Chat/Chat";





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

 <Route path="/chat" exact>
   <Chat/>
 </Route>

  </Switch>
        </div>
    )

}

export default Routes;
