import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import { createCard, readDeck } from "../utils/api";

import CardForm from "./CardForm";

function AddCard() {
  const history = useHistory();
  
  const initialFormState = {
    front: "",
    back: "",
  };

  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [formData, setFormData] = useState({ ...initialFormState });

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    await createCard(deckId, formData, abortController.signal);
    history.push(`/decks/${deckId}`);
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
            <li className="breadcrumb-item">Add Card</li>
          </ol>
        </nav>
        <h2>
          <span>{deck.name}</span>: <span>Add Card</span>
        </h2>
        <CardForm
          formData={formData}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    );
  }
}

export default AddCard;
