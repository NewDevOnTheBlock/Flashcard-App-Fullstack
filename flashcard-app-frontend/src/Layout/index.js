// import react features
import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Header from "./Header";
import Home from "../Home/Home";
import Deck from "../Deck/Deck";
import Study from "../Deck/Study";
import NotFound from "./NotFound";
import CreateDeck from "../Deck/CreateDeck"
import EditDeck from "../Deck/EditDeck"
import AddCard from "../Card/AddCard"
import EditCard from "../Card/EditCard";

function Layout() {
  return (
    <main>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </main>
  );
}

/*

  remember that a path needs to start with the most specific point first!

          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
*/

export default Layout;
