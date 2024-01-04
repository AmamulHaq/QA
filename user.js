const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const user = await Users.create({
      name: req.body.name,
      mood: req.body.mood,
      comment: req.body.comment,
    });
    console.log("User data saved successfully:", user);
    res.status(201).send("Data saved successfully");
   
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Error saving data");
  }
});

router.get("/", async (req, res) => {
  return res.status(200).json({
    hello: "hii",
  });
});

module.exports = router;
