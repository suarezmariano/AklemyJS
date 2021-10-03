const db = require("../database/models/index");

const indexController = {
    index: function (req, res) {
      return res.render("index");
    },

    new: function (req, res) {
      return res.render("new");
    },

    save: function (req, res) {

      db.Movement.create({
        movement_type: req.body.movement_type,
        date: req.body.date,
        amount: req.body.amount,
        concept: req.body.concept,
        comment: req.body.comment,
      })

      return res.redirect("resume");
    },

    list: function (req, res) {
      db.Movement.findAll().then((movements) => {
        return res.render("./resume", { movements: movements });
      });
    },

    edit: function (req, res) {
      db.Movement.findByPk(req.params.idMovement).then(function (movementDetail) {
        return res.render("./edit", { movementDetail: movementDetail });
      });
    },

    saveModification: function (req, res) {

      db.Movement.update({
        date: req.body.date,
        amount: req.body.amount,
        concept: req.body.concept,
        comment: req.body.comment,
      }, { where: {id_movement: req.params.idMovement}});

      return res.redirect("../resume");

    },

    delete: function (req, res) {
      db.Movement.findByPk(req.params.idMovement).then(function (movementDetail) {
        return res.render("./delete", { movementDetail: movementDetail });
      });
    },
    
    deleteMovement: function (req, res) {

      db.Movement.destroy({
        where: {id_movement: req.params.idMovement },
      });

      return res.redirect("../resume");      
    }
  };
  
  module.exports = indexController;