const mongoose = require("mongoose");
require("dotenv").config();   // ✅ LOAD ENV FIRST

const app = require("./src/app"); // ✅ THEN load app

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });
