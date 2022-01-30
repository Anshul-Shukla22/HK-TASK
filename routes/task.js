var mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  task_name: String,
  task_type: String,
  user: String,
});

module.exports = mongoose.model("task", taskSchema);
