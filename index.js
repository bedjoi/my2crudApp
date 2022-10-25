const express = require("express");
const app = express();
const path = require('path');
const { Pool } = require("pg");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname + '/public')))

console.log((path.join(__dirname + '/public')))

app.get("/", (req, res) => {
  res.render('index');
})

app.listen(4000, () => {
  console.log("Serveur démarré au port 4000 !");
});


