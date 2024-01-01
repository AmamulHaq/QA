const mongoose = require("mongoose");
const userData = new mongoose.Schema({
  name: { type: Text },
  mood: { type: Text },
});
const user = mongoose.model("user", userData);
module.exports = user;
