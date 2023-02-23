const mongoose = require("mongoose")

const Schema = mongoose.Schema

const deckSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card',
        required: false
    }]
}, { timesatamps: true })

module.exports = mongoose.model("Deck", deckSchema)