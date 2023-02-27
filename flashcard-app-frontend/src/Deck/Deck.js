// React
import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch, Link, Route, useHistory } from 'react-router-dom'
// Components
import CardList from '../Card/CardList'
// functions
import { readDeck } from '../utils/api/index';
import { deleteDeck } from '../utils/api/index';

// pass down  the setDeck to the card tiles
// on handleDelete(cardTile), call readDeck to get the deck again, store in variable
// then use setDeck (passed from deck.js) to set the deck of the cards

function Deck() {
    const [deck, setDeck] = useState({});
    const { deckId } = useParams();
    const { url } = useRouteMatch();
    const history = useHistory();
    
    useEffect(() => {
        setDeck({})
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck)
    }, [deckId])

    const handleDelete = async () => {
        const abortController = new AbortController()
        if (window.confirm("Delete this deck? \n \n You cannot get it back if you do!")) {
            await deleteDeck(deckId, abortController.signal)
            history.push("/")
        } else {
            history.go(0)
        }
    }

    if (!deck._id) {
        return <p>Loading...</p>
    } else {
        return (
            <Route path={`${url}`}>
                <section>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">{deck.name}</li>
                        </ol>
                    </nav>
                    <header>
                        <h2>{deck.name}</h2>
                        <p>{deck.description}</p>
                        <div className="d-flex justify-content-between">
                            <Link to={`${url}/edit`}>
                                <button type="button" className="btn btn-secondary">Edit</button>
                            </Link>

                            <Link to={`${url}/study`}>
                                <button type="button" className="btn btn-primary">Study</button>
                            </Link>

                            <Link to={`${url}/cards/new`}>
                                <button type="button" className="btn btn-primary">+ Add Card</button>
                            </Link>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>                    
                        </div>
                    </header>
                    <br />
                    <main>
                        <CardList deckId={deckId} />
                    </main>
                </section>
            </Route>
        )
    }
    
}

export default Deck;