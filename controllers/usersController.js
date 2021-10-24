const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs")
const db = require("../database/models/index");

const usersController = {
    register: function (req, res) {
      return res.render("./users/register");
    },

    registerProcess: function (req, res) {
      let resultValidation = validationResult(req);
      
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

        return res.render("./users/login", {
          errors: {
            email: {
              msg: "* Usuario creado correctamente, por favor logueate.",
            },
          },
        });

      };
      
    },

    login: function (req, res) {
      return res.render("./users/login");
    },

    loginProcess: function (req, res) {
      let resultValidation = validationResult(req);
      
      if (resultValidation.errors.length > 0) {
        return res.render("./users/login", { 
          errors: resultValidation.mapped(),
          oldData: req.body,
        });

      } else {
       

      };
    }
  }
  module.exports = usersController;