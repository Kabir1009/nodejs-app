const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    application: "myapp-prod",
    status: "running",
    environment: "development"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

module.exports = app;
