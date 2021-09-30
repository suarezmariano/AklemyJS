const indexController = {
    index: function (req, res) {
      return res.render("index");
    },
    resume: function (req, res) {
      return res.render("resume");
    }
  };
  
  module.exports = indexController;