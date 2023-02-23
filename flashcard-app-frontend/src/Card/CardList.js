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

    const cardList = cards.map((card, index) => {
        return (
            <CardTile deckId={ deckId } card={ card } key={ index }/>
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