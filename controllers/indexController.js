const indexController = {
    index: function (req, res) {
      return res.render("index");
    },
    resume: function (req, res) {
      return res.render("resume");
    },
    new: function (req, res) {
      return res.render("new");
    }
  };
  
  module.exports = indexController;