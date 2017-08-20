const express = require('express');
const bodyParser = require('body-parser');
const Todo = require('../models/todo');

const router = express.Router();

// Ensure url-encoded and JSON data is parsed from body if there
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

// Using usernames instead of user IDs to cut corners
router.get('/users/:uname(\\w+)/todos/', (req, res) => {
  Todo.find({username: req.params.uname}, (err, data) => {
      if (err) throw err;
      res.send(data);
  });

})

router.get('/todos/:id([a-fA-F0-9]+)', (req, res) => {
  Todo.findById(req.params.id, (err, data) => {
    if(err) throw err;
    res.send(data);
  })
})

router.route('/todos/')
  .post((req, res) => {
    let todo = new Todo({
      username: 'test',
      todo: req.body.todo,
      completed: req.body.completed,
      hasAttachment: req.body.hasAttachment
    });
    todo.save((err) => {
      if (err) throw err;
      res.send('Todo saved successfully');
    });
  })
  .put((req, res) => {
    Todo.findByIdAndUpdate(req.body.id, {
      todo: req.body.todo,
      completed: req.body.completed,
      hasAttachment: req.body.hasAttachment
    }, (err, data) => {
      if (err) throw err;
      res.send(`Todo ${req.body.id} updated successfully`);
    });
  })
  .delete((req, res) => {
    Todo.findByIdAndRemove(req.body.id, (err, data) => {
      if(err) throw err;
      res.send(`Todo ${req.body.id} deleted successfully`)
    })
  })

module.exports = router;
