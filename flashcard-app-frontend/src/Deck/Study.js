import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { listCards } from "../utils/api";
// components
import StudyCard from "../Card/StudyCard";

// functions
import { readDeck } from "../utils/api";

function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    
  }, [deckId]);

  if (!deck._id) {
    return <p>Loading...</p>;
  } else if (deck.cards.length < 3) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deck._id}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h2>
          <span>Study</span>: <span>{deck.name}</span>
        </h2>
        <p>Not enough cards</p>
        <Link to={`/decks/${deck._id}/cards/new`}>
          <button type="button" className="btn btn-primary">
            + Add Cards
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deck._id}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h2>
          <span>Study</span>:<span>{deck.name}</span>
        </h2>
        <br />
        <StudyCard cards={deck.cards} />
      </div>
    );
  }
}

export default Study;
