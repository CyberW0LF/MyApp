const router = require("express").Router();

const mainController = require("../controllers/main");

router.route("/").get(mainController.root);

module.exports = router;
