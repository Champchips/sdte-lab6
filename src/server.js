const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  // res.send("Hello world!");
  return "Test to Failure"
});

module.exports = app;
