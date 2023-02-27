
import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
// functions
import { readCard } from '../utils/api'

function StudyCard({ cards }) {
    const [side, setSide] = useState(true);
    const [cardIndex, setCardIndex] = useState(0);
    const [currentCard, setCurrentCard] = useState(cards[0])

    const { deckId } = useParams();
    const history = useHistory();
    
    const cardId = cards[cardIndex];

    const nextHandler = () => {
        setSide(true)
        
        if (cardIndex === (cards.length - 1)) {
            setSide(true)
            window.confirm("Do you want to study this deck again? \n \n Click Cancel to return home.") ?
            setCardIndex(0) :
            history.push("/")
        } else {
            setCardIndex(cardIndex + 1)
        }
    }
    
    useEffect(() => {
        setCurrentCard({})
        const abortController = new AbortController()
        readCard(deckId, cardId, abortController.signal).then(setCurrentCard)
        return () => abortController.abort()
    },[cardId, deckId])

    const flipHandler = () => {
        setSide(!side)
    }

    if (side) {
        return (
            <main className="card" style={{ padding: "24px" }}>
                <div className="d-flex justify-content-between">
                    <p>{currentCard.front}</p>
                    <p>Card {cardIndex + 1} of {cards.length}</p>
                </div>
                <div className="d-flex">
                    <button type="button" className="btn btn-secondary" onClick={flipHandler}>Flip</button>
                </div>
            </main>
        )
    } else {
        return (
            <main className="card" style={{padding: "12px"}}>
                <div className="d-flex justify-content-between">
                    <p>{currentCard.back}</p>
                    <p>Card {cardIndex + 1} of {cards.length}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={flipHandler}>Flip</button>
                    <button type="button" className="btn btn-primary" onClick={nextHandler}>Next</button>
                </div>
            </main>
        )
    }
}

export default StudyCard