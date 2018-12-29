const router = require("express").Router();

const mainController = require("../controllers/main");
// Temporary
const usersController = require("../controllers/users");

router
  .route("/")
  .get(mainController.root)
  .post(usersController.test);

module.exports = router;
