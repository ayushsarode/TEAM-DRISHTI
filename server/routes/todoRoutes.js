const express = require('express');
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require('../controller/todoController');


const router = express.Router();

router.route('/')
  .post(createTodo)  // Create a todo
  .get(getTodos);    // Get all todos for the logged-in user

router.route('/:id')
  .put(updateTodo)   // Update a specific todo
  .delete(deleteTodo); // Delete a specific todo

module.exports = router;
