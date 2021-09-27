const express = require("express");
const path = require("path");

// initializations
const app = express();

// ports
app.set("port", process.env.PORT || 3000);

// starting the server
app.listen(app.get("port"), () => {
    console.log("Server Running on Port ", app.get("port"));
});

// public
const publicFolderPath = path.resolve(__dirname,"./public");
app.use(express.static(publicFolderPath));

// settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



module.exports = app;