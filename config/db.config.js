const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/portfolio")
  .then(() => {
    console.log("MongoDB Connected Succesfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
