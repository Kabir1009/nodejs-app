const express = require("express");
const app = express();

app.use(express.json());

// Main API endpoint
app.get("/", (req, res) => {
  res.json({
    application: "myapp-prod",
    status: "running",
    environment: "development"
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
