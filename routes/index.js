const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.get("/resume", indexController.resume);

// new movement
router.get("/new", indexController.new);
router.post("/new", indexController.save);

module.exports = router;
