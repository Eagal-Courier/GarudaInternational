const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const hbs = require("hbs");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "templates", "pages"));
hbs.registerPartials(path.join(__dirname, "templates", "partials"));

app.get("/", (req, res) => {
  res.render("home");
});

module.exports = app;
