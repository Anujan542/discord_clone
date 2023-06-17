const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("user", UserSchema);
