import React from "react";
import { Route, Switch } from "react-router-dom";
import CombinedNav from "../Components/navbar/CombinedNav";
import Landing from "../Components/landing/Landing";
import WhiteBoard from "../Components/whiteboard/WhiteBoard";
import Board from "../Components/Board/Board";
import { v4 as uuid } from "uuid";
import Chat from "../Components/chat/Chat/Chat";
import Book from "../Components/books/components/Book";
import Read from "../Components/books/components/Read";
function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <CombinedNav />
          <Landing />
        </Route>

        <Route path="/group/:id" exact>
          <Board />
        </Route>
        <Route path="/book" exact>
          <Book />
        </Route>
        <Route path="/book/read" exact>
          <Read />
        </Route>

        <Route path="/chat" exact>
          <Chat />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
