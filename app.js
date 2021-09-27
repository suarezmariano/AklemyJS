const express = require("express");
const app = express();
const path = require("path");

const publicFolderPath = path.resolve(__dirname,"./public");
app.use(express.static(publicFolderPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");