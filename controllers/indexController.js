const db = require("../database/models/index");

const indexController = {
    index: function (req, res) {
      return res.render("index");
    },
    new: function (req, res) {
      return res.render("new");
    },
    saveMovement: function (req, res) {
      db.Movement.findByPk(req.params.idMovement).then(function (movementDetail) {
        return res.render("./edit", { movementDetail: movementDetail });
      });
    },

    list: function (req, res) {
      db.Movement.findAll().then((movements) => {
        return res.render("./resume", { movements: movements });
      });
    },

    edit: function (req, res) {
      return res.render("edit");
    },

    saveModification: function (req, res) {
      db.Movement.update({
        date: req.body.date,
        amount: req.body.amount,
        concept: req.body.concept,
        comment: req.body.comment,
      }, { where: {id_movement = req.params.idMovement}});
    },

    delete: function (req, res) {
      return res.render("delete");
    },
    
    deleteMovement: function (req, res) {

      db.Movement.destroy({
        
      })

      return res.redirect("resume");      
    }
  };
  
  module.exports = indexController;