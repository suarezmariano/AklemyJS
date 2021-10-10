const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validateRegForm = require("../middlewares/validateRegForm");

// login
router.get("/login", usersController.login);
router.post("/login", usersController.userLogged);

// register
router.get("/register", usersController.register);
router.post("/register", validateRegForm, usersController.registerProcess);

module.exports = router;
