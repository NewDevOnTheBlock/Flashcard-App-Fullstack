const Card = require("../models/cardModel")
const Deck = require("../models/deckModel");

// read
async function readCard(card_id) {
  return await Card.findById({ _id: card_id })
}
 
// list (for test purposes)
async function listCards(deck_id) {
  const deck = await Deck.findById({ _id: deck_id });
  return await Card.find({ _id: {$in: deck.cards} });
}

// create
async function createCard(newCard) {
  return await Card.create(newCard)
}

// update
async function updateCard(card_id, updatedCard) {
  return await Card.findOneAndUpdate({ _id: card_id }, updatedCard)
}

// delete one card
async function destroyCard(card_id) {
  return await Card.findByIdAndDelete({ _id: card_id })
}

// delete all acards from collection upon deck deletion


module.exports = {
  list: listCards,
  create: createCard,
  read: readCard,
  update: updateCard,
  delete: destroyCard,
}