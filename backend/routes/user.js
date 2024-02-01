const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
// ne pas oublier de rajouter auth dans les routes qui doivent être protégées

module.exports = router;