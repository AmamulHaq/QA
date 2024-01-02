const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb:0.0.0:27017/User", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.error("Error connecting to the database:", e);
  });

app.post("/user", async (req, res) => {
  try {
    console.log("its working");
    const userData = new User({
      name: req.body.name,
      mood: req.body.mood,
    });
    console.log(`${name} and ${mood}`);

    const savedUser = await userData.save();
    res.status(201).send("Data saved successfully");
  } catch (error) {
    res.status(500).send("Error saving data");
  }
});

app.get("/", (req, res) => {
  return res.redirect("index.html");
}).listen(3000);

app.listen(port, () => {
  console.log("App running on port:", port);
});

