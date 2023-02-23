import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";

import DeckForm from "./DeckForm";

function EditDeck() {
  const { deckId } = useParams();
  const history = useHistory();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setFormData);
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
    const response = await updateDeck(formData, abortController.signal);
    history.push(`/decks/${response._id}`);
  };

  if (!formData._id) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">{formData.name}</li>
            <li className="breadcrumb-item">Edit Deck</li>
          </ol>
        </nav>
        <h2>Edit Deck</h2>
        <DeckForm
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          formData={formData}
        />
      </div>
    );
  }
}

export default EditDeck;
