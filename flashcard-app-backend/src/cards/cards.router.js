const router = require("express").Router({ mergeParams: true });
const controller = require("./cards.controller");

const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:card_id")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.deleteCard)
    .all(methodNotAllowed)

router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)


module.exports = router;