const service = require("./cards.service");
const Deck = require("../models/deckModel");
const Card = require("../models/cardModel");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// validate a specific card exists before performing actions on it
async function cardExists(req, res, next) {
  const { card_id } = req.params;
  const card = await service.read(card_id);

  if (card) {
    res.locals.card = card;
    res.locals.card_id = card_id;
    return next();
  }
  return next({
    status: 404,
    message: `A card with the ID of ${card_id} cannot be found.`,
  });
}

// list all cards  related to a specific deck
async function list(req, res, _next) {
  const { deck_id } = req.params;
  const deck = await service.list(deck_id);

  res.json(deck)
}

// create a new deck to add to the list
async function create(req, res, next) {
  const { deck_id } = req.params;

  const card = new Card();
  card.front = req.body.front;
  card.back = req.body.back;
  card.save()
    .then((result) => {
      Deck.findOne({ _id: deck_id }, (err, deck) => {
        if (deck) {
          deck.cards.push(card);
          deck.save();
          res.json(card);
        }
      });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
}

async function updateCard(req, res, next) {
  const { card_id } = req.params;
  const updatedInfo = await service.update(card_id, req.body);
  
  res.json(updatedInfo)
}

// read a specific card in a deck by its ID
function read(_req, res, _next) {
  const { card } = res.locals;
  res.json(card);
}

// delete a specific card by its ID
async function deleteCard(req, res, next) {
  const { card_id } = req.params;
  const { deck_id } = req.params;

  const deletedCard = await service.delete(card_id);

  if (deletedCard) {
    const updatedDeck = await Deck.findOneAndUpdate({ _id: deck_id }, { $pull: { cards : card_id } });
    res.status(200).json(updatedDeck);
  }
}

// delete all cards related to a specific deck by the deck ID
// async function deleteDeck(req, res, next) {
//   const { deck_id } = req.params;
//   const removedDeck = await service.delete({ deck_id })
//   res.json({ removedDeck })
// }


module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),
  read: [asyncErrorBoundary(cardExists), read],
  deleteCard: [asyncErrorBoundary(cardExists), deleteCard],
  update: [asyncErrorBoundary(cardExists), updateCard],
};