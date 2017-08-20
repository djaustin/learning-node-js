const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let todoSchema = new Schema({
  user: String,
  todo: String,
  completed: Boolean,
  hasAttachment: Boolean
});

var Todo = new mongoose.model('Todo', todoSchema);

module.exports = Todo;
