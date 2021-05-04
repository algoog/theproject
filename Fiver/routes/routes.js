const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/auth/regsitrationController");
const loginController = require("../controllers/auth/loginController");
const auth = require("../middlewares/auth");
router.post("/register", registrationController.register);
router.post("/login", loginController.login);
router.get("/logout", auth, loginController.logout);

module.exports = router;
