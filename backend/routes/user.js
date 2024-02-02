const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middlewares/auth");

router.post("/signup", auth, userCtrl.signup);
router.post("/login", auth, userCtrl.login);
// ne pas oublier de rajouter auth dans les routes qui doivent être protégées

module.exports = router;
