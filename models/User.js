const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    mood: { type: String },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);
const Users = mongoose.model("Users", UserSchema);
module.exports = Users;
