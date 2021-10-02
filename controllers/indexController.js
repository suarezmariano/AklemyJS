const db = require("../database/models/index");

const indexController = {
    index: function (req, res) {
      return res.render("index");
    },
    resume: function (req, res) {
      return res.render("resume");
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
    }
  };
  
  module.exports = indexController;