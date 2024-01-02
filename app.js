const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("localhost:27017/User.QA", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.error("Error connecting to the database:", e);
  });

app.post("/", async (req, res) => {
  try {
    console.log("its working");
    const userData = new User({
      name: req.body.name,
      mood: req.body.mood,
    });

    const User = await userData.save();
    res.status(201).send("Data saved successfully");
  } catch (error) {
    res.status(500).send("Error saving data");
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log("App running on port:", port);
});
