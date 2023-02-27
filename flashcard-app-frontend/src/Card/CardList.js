import React, { useEffect, useState } from 'react';
import { listCards } from '../utils/api/index'

import CardTile from './CardTile'
 
function CardList({ deckId }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
      setCards([])
      const abortController = new AbortController();
      listCards(deckId, abortController.signal).then(setCards)
  }, [deckId])

      // const handleDelete = async () => {
    //     const abortController = new AbortController()
    //     if (window.confirm("Delete this card? \n \n You cannot get it back if you do!")) {
    //         await deleteCard(deckId, cardId, abortController.signal)
    //         history.go(0)
    //     } else {
    //         history.push("/")
    //     }
    // }

    const cardList = cards.map((card, index) => {
        return (
            <CardTile setCards={setCards} deckId={deckId} card={card} key={index} />
        )
    })

  if (!cards) {
    return <p>Loading...</p>
  } else {
      return (
          <div>
            { cardList }
          </div>
      )
  }
}

export default CardList