const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let todoSchema = new Schema({
  username: String,
  todo: String,
  completed: Boolean,
  hasAttachment: Boolean
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
