// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
// var user = [{
//   name: "Irina",
//   phone: "832-405-8959",
//   email: "copacies@gmail.com",
//   id: "irivi"
// },
// {
//     name: "Raquel",
//     phone: "832-4063-8932",
//     email: "acies@gmail.com",
//     id: "raquel"
// },{
//     name: "JJ",
//     phone: "832-432-1589",
//     email: "cies@gmail.com",
//     id: "jj"
// }];

// Routes
// // ===========================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/makeRes", function(req, res) {
  res.sendFile(path.join(__dirname, "makeRes.html"));
});
app.get("/viewRes", function(req, res) {
  res.sendFile(path.join(__dirname, "viewRes.html"));
});
// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});