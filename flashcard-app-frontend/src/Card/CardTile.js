import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { deleteCard, listCards } from "../utils/api";

function CardTile({ deckId, card, index, setCards }) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const cardId = card._id;

  const handleDelete = async () => {
    const abortController = new AbortController();
    if (
      window.confirm(
        "Delete this card? \n \n You cannot get it back if you do!"
      )
    ) {
      await deleteCard(deckId, cardId, abortController.signal);
      const remainingCards = await listCards(deckId, abortController.signal);
      setCards(remainingCards);
    } else {
      history.push("/");
    }
  };

  return (
    <main key={index}>
      <section className="card" style={{ padding: "12px" }}>
        <div className="d-flex justify-content-between">
          <p>{card.front}</p>
          <p>{card.back}</p>
        </div>
        <div className="d-flex justify-content-between">
          <Link to={`${url}/cards/${card._id}/edit`}>
            <button type="button" className="btn btn-secondary">
              <i class="fa fa-pencil" aria-hidden="true"></i> Edit Card
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <i class="fa fa-trash" aria-hidden="true"></i> Delete
          </button>
        </div>
      </section>
    </main>
  );
}

export default CardTile;
