import React from "react";
import { Route, Switch } from "react-router-dom";
import CombinedNav from "../Components/navbar/CombinedNav";
import Landing from "../Components/landing/Landing";
import Board from "../Components/Board/Board";
import Room from "../Components/video/Room";
import Book from "../Components/books/components/Book";
import Read from "../Components/books/components/Read";

function Routes() {
  return (
    <div>
      <CombinedNav />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>

        {/* <Header /> */}
        <Route exact path="/book">
          <Book />
        </Route>
        <Route path="/book/read">
          <Read />
        </Route>

        <Route path="/Group/:id" exact>
          <Board />
        </Route>

        <Route path="/room/:roomID" component={Room} />
      </Switch>
    </div>
  );
}

export default Routes;
