const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cardSchema = new Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    },
    deck: {
        type: Schema.Types.ObjectId,
        ref: 'Deck',
        required: false
    }
})

module.exports = mongoose.model("Card", cardSchema)