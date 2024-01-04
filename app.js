const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./user");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUri = process.env.MONGODB_URI;
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.error("Error connecting to the database:", e);
  });

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.use("/user", router);
app.listen(port, () => {
  console.log("App running on port:", port);
});
