const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express(); // 👈 THIS IS CRITICAL

// Global middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Smart Campus Event Management API is running",
  });
});

module.exports = app; // 👈 THIS IS CRITICAL
