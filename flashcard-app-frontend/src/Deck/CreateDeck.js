// react features
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
// components
import DeckForm from "./DeckForm";
// functions
import { createDeck } from "../utils/api";

function CreateDeck() {
  const history = useHistory();

  const initialFormState = {
    name: "",
    description: "",
    cards: [],
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const response = await createDeck(formData, abortController.signal);
    setFormData({ ...initialFormState });
    history.push(`/decks/${response._id}`);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">Create Deck</li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <DeckForm
        formData={formData}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
    </div>
  );
}

export default CreateDeck;
