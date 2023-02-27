const service = require("./decks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// validate deck exists before performing actions on it
async function deckExists(req, res, next) {
    const { deck_id } = req.params;
    const deck = await service.read(deck_id);

    if (deck) {
        res.locals.deck = deck;
        return next();
    }

    return next({
        status: 404,
        message: `A deck with the ID of ${deck_id} cannot be found.`,
    });
}

// list all decks in the db
async function list(_req, res, _next) {
    const deckList = await service.list();

    res.json(deckList);
}

// create a deck to add to the list
async function create(req, res) {
    const { name, description } = req.body
    const deck = await service.create(name, description)

    res.status(200).json(deck)
}

// read a specific deck by its ID
function read(_req, res, _next) {
    const { deck } = res.locals;

    res.json(deck);
}

// update a specific deck by its ID
async function update(req, res, next) {
    const { deck_id } = req.params;
    const updatedInfo = await service.update(deck_id, req.body);

    res.json(updatedInfo)
}

// delete a specific deck by its ID
async function destroyDeck(req, res, next) {
    const { deck_id } = req.params;
    await service.destroy(deck_id)

    res.json({ message: "Deck successfully deleted"});
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    read: [asyncErrorBoundary(deckExists), read],
    update: [asyncErrorBoundary(deckExists), update],
    destroyDeck: [asyncErrorBoundary(deckExists), destroyDeck],
    deckExists,
}