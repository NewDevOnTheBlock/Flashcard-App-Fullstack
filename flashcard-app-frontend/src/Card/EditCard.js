import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api";

import CardForm from "./CardForm";

function EditCard() {
  const history = useHistory()
  const [deck, setDeck] = useState({});
  const [formData, setFormData] = useState({});

  const { deckId, cardId } = useParams();
  
  useEffect(() => {
    const abortController = new AbortController();

    readDeck(deckId, abortController.signal).then(setDeck);
    readCard(deckId, cardId, abortController.signal).then(setFormData);

    return () => abortController.abort();
  }, [deckId, cardId]);

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
  
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    
    await updateCard(deckId, formData, abortController.signal)
    history.push(`/decks/${deckId}`)
  };

  if (!deck._id) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">{deck.name}</li>
            <li className="breadcrumb-item">Edit Card</li>
          </ol>
        </nav>
        <h2>{deck.name}: Edit Card</h2>
        <CardForm
          formData={formData}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    );
  }
}

export default EditCard;
