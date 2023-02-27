const router = require("express").Router({ mergeParams: true });
const controller = require("./decks.controller");

const cardsRouter = require("../cards/cards.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.use("/:deck_id/cards", controller.deckExists, cardsRouter);

router.route("/:deck_id")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.destroyDeck)
    .all(methodNotAllowed)

router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

module.exports = router;