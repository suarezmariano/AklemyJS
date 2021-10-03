const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// all movements
router.get("/", apiController.all);

// show one movement
router.get("/:idMovement", apiController.show);

// create a movement
router.post("/", apiController.create);

// delete a movement
router.delete("/:idMovement", apiController.delete)

// modify a movement
router.put("/:idMovement", apiController.modify)

// search a movement
router.get("/search", apiController.search);

module.exports = router;