var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/HackerKernelDB");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile_number: Number,
});

module.exports = mongoose.model("user", userSchema);
