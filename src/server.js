const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Test to Failure");
});

module.exports = app;
