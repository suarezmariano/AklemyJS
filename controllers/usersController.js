const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs")
const db = require("../database/models/index");

const usersController = {
    login: function (req, res) {
      return res.render("./users/login");
    },

    userLogged: function (req, res) {
      
    },

    register: function (req, res) {
      return res.render("./users/register");
    },

    registerProcess: function (req, res) {
      const resultValidation = validationResult(req);

      if (resultValidation.errors.length > 0) {
        return res.render("./users/register", { 
          errors: resultValidation.mapped(),
          oldData: req.body,
        });

      } else {

        db.User.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
        });

        return res.send("Usuario Creado");

      }
    },    

  };
  
  module.exports = usersController;