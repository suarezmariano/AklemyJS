const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

// home page
router.get("/", indexController.index); 

// all movements
router.get("/resume", indexController.list); 

// new movement
router.get("/new", indexController.new); 
router.post("/new", indexController.save); 

// edit movement
router.get("/edit/:idMovement", indexController.edit);
router.put("/edit/:idMovement", indexController.saveModification);

// delete movement
router.get("/delete/:idMovement", indexController.delete);
router.delete("/delete/:idMovement", indexController.deleteMovement);

// login
router.get("/login", indexController.login);

module.exports = router;
