const hbs = require("hbs");
const path = require("path");

hbs.registerPartials(path.join(__dirname, "..", "views", "partials"));

hbs.registerHelper("increment", function (value) {
  return parseInt(value) + 1;
});
hbs.registerHelper("formatDate", function (dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
});
hbs.registerHelper("eq", function (a, b) {
  return a === b;
});
