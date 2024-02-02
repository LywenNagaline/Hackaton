const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
/* const auth = require("../middlewares/auth"); */

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
//Les routes doivent d'abord passer par le système d'authentification avant de pouvoir se login ou s'inscire

module.exports = router;
