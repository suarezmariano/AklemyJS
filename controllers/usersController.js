const { validationResult } = require("express-validator");

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
      }
    },    

  };
  
  module.exports = usersController;