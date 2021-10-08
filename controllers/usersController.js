const usersController = {
    login: function (req, res) {
      return res.render("./users/login");
    },

    register: function (req, res) {
      return res.send(req.body.email);
    }

  };
  
  module.exports = usersController;