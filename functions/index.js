const path = require("path");
const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const { engine } = require("express-handlebars");
const { generatePassword } = require("./public/javascripts/generate_password");

const app = express();

//View => Use Handlebars as view engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views")); // ✅ 改為絕對路徑

//Model => Load static files
app.use(express.static(path.join(__dirname, "public"))); // ✅ 改為絕對路徑

//Middleware => Encode url
app.use(express.urlencoded({ extended: true }));

//Controller => Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const option = req.body;
  const password = generatePassword(option);
  res.render("index", { password, option });
});

exports.app = onRequest(app);
