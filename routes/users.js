const router = require("express").Router();
const userController = require("../controllers/users");
const { validateBody, schemas } = require("../helpers/routerHelper");
const passport = require("passport");
require("../passport");

const authJWT = passport.authenticate("jwt", { session: false });

router.route("/signup").post(validateBody(schemas.auth), userController.signUp);
router.route("/signin").post(validateBody(schemas.auth), userController.signIn);
router.route("/secret").get(authJWT, userController.secret);

module.exports = router; 
