// React features
import React from 'react';
import { Link } from 'react-router-dom'
// components
import DeckTile from './DeckTile'

function DeckList({ decks, setAllDecks }) {

    const listOfDecks = decks.map((deck, index) => <DeckTile key={index} setAllDecks={setAllDecks} deck={deck} />)

    return (
        <section>
            <div>
                <Link to="/decks/new">
                    <button type="button" className="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i> Create Deck</button>
                </Link>
            </div>
            
            <br />
            {listOfDecks}
        </section>
    )
}

export default DeckList;