const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.index); //FUNCIONA

router.get("/resume", indexController.list); //FUNCIONA

// new movement
router.get("/new", indexController.new); //FUNCIONA
router.post("/new", indexController.save); //FUNCIONA

// edit movement
router.get("/edit/:idMovement", indexController.edit);//FUNCIONA
router.put("/edit/:idMovement", indexController.saveModification);//FUNCIONA

// delete movement
router.get("/delete/:idMovement", indexController.delete);//FUNCIONA
router.delete("/delete/:idMovement", indexController.deleteMovement);


module.exports = router;
