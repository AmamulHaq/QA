const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  name: { type: String, required: true }, 
  mood: { type: String, required: true }, 
});

const User = mongoose.model("User", userData);
module.exports = User;
