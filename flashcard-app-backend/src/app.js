const express = require("express");

// instantiate app, require cors
const app = express();
const cors = require("cors");

// imported routes
const cardsRouter = require("./cards/cards.router");
const decksRouter = require("./decks/decks.router");
// error route handlers
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler")

// express app
app.use(cors());

app.use(express.json());

// routes
app.use("/decks", decksRouter);
// app.use("/cards", cardsRouter);

// error routes/not found
app.use(notFound);
app.use(errorHandler);

module.exports = app;