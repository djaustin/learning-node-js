// Controller to handle setup
const express = require('express');
const Todo = require('../models/todo');
const config = require('../config');
const router = express.Router();

router.get('/setupTodos', (req, res) => {
  if(config.environment !== "dev"){
    res.sendStatus(403)
  }else{
    // Delete exsiting test data
    Todo.remove({username: "test"}, () => {

        // Seed database with data
        // Built-in function converts array of objects to array of 'Todos'
        let todos = Todo.create(config.starterTodos, (err, data) => {
          if(!err){
            // Send as JSON when finished
            res.send(todos);
          }
        });
    });
}

})

module.exports = router;
