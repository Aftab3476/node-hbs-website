const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const hbs = require("hbs");
// const requests = require('requests')

const statisPath = path.join(__dirname, "../public");

const pathTempletes = path.join(__dirname, "../templetes/views");
const partialsPath = path.join(__dirname, "../templetes/partials")

app.set("view engine", "hbs");

app.set("views", pathTempletes);
hbs.registerPartials(partialsPath)

app.use(express.static(statisPath));

app.get("", (req, res) => {
  res.render("index", {
    channelName: "Aftab",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    channelName: "Aftab",
  })
});

app.get("/about/*", (req, res) => {
  res.render("404", {
    ErrorPage: "Opps, this about us page couldn't be found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    ErrorPage: "Opps, this page couldn't be found. ",
  });
});

app.listen(PORT, () => {
  console.log(`listning to the port ${PORT}`);
});
