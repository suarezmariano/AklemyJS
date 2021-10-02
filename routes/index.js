const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

router.get("/resume", indexController.list);

// new movement
router.get("/new", indexController.new);
router.post("/new", indexController.saveMovement);

// edit movement
router.get("/edit", indexController.edit);
router.post("/edit/:idMovement", indexController.saveModification);

// delete movement
router.get("/delete", indexController.delete);
router.delete("/delete", indexController.deleteMovement);


module.exports = router;
