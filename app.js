const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

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
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// routes
const indexRouter = require("./routes/index");

app.use("/", indexRouter);

// page not found
app.use((req, res, next) => {
    res.status(404).render("not-found");
});

module.exports = app;