const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");

const router = express.Router();

router.post("/user", async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const userData = new User({
      name: req.body.name,
      mood: req.body.mood,
    });

    const savedUser = await userData.save();
    console.log("User data saved successfully:", savedUser);

    res.status(201).send("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Error saving data");
  }
});

module.exports = router;
