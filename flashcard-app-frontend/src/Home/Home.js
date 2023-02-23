import React, { useState, useEffect} from 'react';
import { listDecks } from '../utils/api';
import DeckList from './DeckList'

function Home() {
    const [allDecks, setAllDecks] = useState([]);

    useEffect(() => {
        setAllDecks([])
        const abortController = new AbortController();
        listDecks(abortController.signal).then(setAllDecks)
        return () => abortController.abort()
    }, [])

    return (
        <DeckList decks={allDecks} />
    )
}

export default Home;