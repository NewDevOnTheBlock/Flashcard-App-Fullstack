const Deck = require("../models/deckModel")
const Card = require("../models/cardModel")
// retrieves a list of decks
async function getDecks() {
    return await Deck.find({}).sort({ createdAt: 1 })
}

// adds a deck to the decks collection
async function createDeck(name, description) {
    try {
        return await Deck.create({ name, description }) 
    } catch(err) {
        console.log(err)
    }
}

// retrieve the info from a single deck
async function readDeck(deck_id) {
    try {
        return await Deck.findById(deck_id)
    } catch(err) {
        console.log(err)
    }
}

// updates the info of a single deck
async function updateDeck(deck_id, updatedDeck) {
    try {
        return await Deck.findOneAndUpdate(
            { _id: deck_id }, 
            { ...updatedDeck }
        )
    } catch(err) {
        console.log(err)
    }
}

// deletes a whole deck
async function destroyDeck(deck_id) {
    try {
        const deck = await Deck.findById({ _id: deck_id })
        const cards = deck.cards;
        await Card.deleteMany({ _id: {$in: cards} });
        await Deck.findOneAndDelete({ _id: deck_id })
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    list: getDecks,
    create: createDeck,
    read: readDeck,
    update: updateDeck,
    destroy: destroyDeck,
    // updateDeckCards
}