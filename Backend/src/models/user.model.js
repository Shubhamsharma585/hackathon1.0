const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
  name: String,
  user_name: String
});

const User = mongoose.model("user", userSchema);


module.exports = User;