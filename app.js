const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes/mainRoutes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

const hbs = require("hbs");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "templates", "pages"));
hbs.registerPartials(path.join(__dirname, "templates", "partials"));

module.exports = app;
