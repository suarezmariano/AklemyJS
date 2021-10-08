const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validateUser = require("../middlewares/validateUser");

// login
router.get("/login", usersController.login);
router.post("/login", validateUser, usersController.register);

module.exports = router;
