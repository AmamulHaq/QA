const mongoose = require("mongoose");
mongoose.connect('mongo/QA.user')
const user = new mongoose.Schema({
  name: { type: String, required: true }, 
  mood: { type: String, required: true }, 
});

const User = mongoose.model("User", user);
module.exports = User;
