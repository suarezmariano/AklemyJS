const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validateRegForm = require("../middlewares/validateRegForm");
const validateLogForm = require("../middlewares/validateLogForm");

// register
router.get("/register", usersController.register);
router.post("/register", validateRegForm, usersController.registerProcess);

// login
router.get("/login", usersController.login);
router.post("/login", validateLogForm, usersController.loginProcess);

module.exports = router;
