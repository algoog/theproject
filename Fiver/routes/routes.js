const express = require("express");
const router = express.Router();

const registrationController = require("../controllers/auth/regsitrationController");
const loginController = require("../controllers/auth/loginController");
const showController = require("../controllers/auth/showController");

const auth = require("../middlewares/auth");

router.post("/register", registrationController.register);
router.post("/login", loginController.login);
router.get("/logout", auth, loginController.logout);
router.get("/show/:id", auth, showController.show);

module.exports = router;
