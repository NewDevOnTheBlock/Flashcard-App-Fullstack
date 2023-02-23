import React from "react";
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { deleteCard } from "../utils/api";

function CardTile({ deckId, card, index }) {
    const history = useHistory()
    const { url } = useRouteMatch();
    const cardId = card._id;

    const handleDelete = async () => {
        const abortController = new AbortController()
        if (window.confirm("Delete this card? \n \n You cannot get it back if you do!")) {
            await deleteCard(deckId, cardId, abortController.signal)
            history.go(0)
        } else {
            history.push("/")
        }
    }

    return (
        <main key={ index } >
            <section className="card" style={{ padding: "12px" }}>
                <div className="d-flex justify-content-between">
                    <p>{ card.front }</p>
                    <p>{ card.back }</p>
                </div>
                <div className="d-flex justify-content-between">
                    <Link to={`${ url }/cards/${ card._id }/edit`}>
                        <button type="button" className="btn btn-secondary">Edit</button>
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </section>
        </main>
    )
}

export default CardTile;