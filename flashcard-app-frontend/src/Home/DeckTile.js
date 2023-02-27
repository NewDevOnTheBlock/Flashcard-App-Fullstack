import React from 'react'

import { Link, useHistory } from 'react-router-dom'

import { deleteDeck, listDecks } from '../utils/api'

function DeckTile({ deck, setAllDecks }) {
    const history = useHistory()
    const deckId = deck._id

    const handleDelete = async () => {
        const abortController = new AbortController()
        if (window.confirm("Delete this deck? \n \n You cannot get it back if you do!")) {
            await deleteDeck(deckId, abortController.signal)
            const deckList = await listDecks(abortController.signal)
            setAllDecks(deckList)
        } else {
            history.go(0)
        }
    }

    return (
        <article className="card" style={{ padding: "24px" }}>
            <div className="d-flex justify-content-between">
                <h3>{deck.name}</h3>
                <p>{deck.cards.length} cards</p>
            </div>
            <p>{deck.description}</p>
            <div className="d-flex justify-content-between">
                <Link to={`/decks/${deck._id}`}>
                    <button type="button" className="btn btn-secondary">View</button>
                </Link>
                <Link to={`/decks/${deck._id}/study`}>
                    <button type="button" className="btn btn-primary">Study</button>
                </Link>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </article>
    )
}

export default DeckTile