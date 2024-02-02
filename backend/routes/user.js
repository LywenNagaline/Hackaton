const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middlewares/auth");

router.post("/signup", auth, userCtrl.signup);
router.post("/login", auth, userCtrl.login);
//Les routes doivent d'abord passer par le système d'authentification avant de pouvoir se login ou s'inscire

module.exports = router;
