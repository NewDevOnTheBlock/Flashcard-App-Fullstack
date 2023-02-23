// React features
import React from 'react';
import { Link } from 'react-router-dom'
// components
import DeckTile from './DeckTile'

function DeckList({ decks }) {

    const listOfDecks = decks.map((deck, index) => <DeckTile key={index} deck={deck} />)

    return (
        <section>
            <div>
                <Link to="/decks/new">
                    <button type="button" className="btn btn-primary">+ Create Deck</button>
                </Link>
            </div>
            
            <br />
            {listOfDecks}
        </section>
    )
}

export default DeckList;