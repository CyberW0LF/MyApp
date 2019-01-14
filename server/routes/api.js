const router = require("express").Router();
const passport = require("passport");
const apiController = require("../controllers/api");

const authJWT = passport.authenticate("jwt", { session: false });

router
  .route("/multimedia")
  .get(authJWT, apiController.getMultimedia)
  .post(apiController.newMultimedia);

module.exports = router;
