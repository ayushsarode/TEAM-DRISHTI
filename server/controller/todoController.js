const Todo = require('../models/todoModel');



exports.createTodo = async (req, res) => {
    try {
      const { title, description } = req.body;
      const userId = req.user._id; // Assuming JWT authentication middleware sets `req.user`
  
      const newTodo = new Todo({
        user: userId,
        title,
        description,
      });
  
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user._id });
        res.status(200).json({ success: true, todos });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Private
exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ success: false, message: 'Todo not found' });
        }

        if (todo.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'Not authorized' });
        }

        todo.title = req.body.title || todo.title;
        todo.description = req.body.description || todo.description;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;

        const updatedTodo = await todo.save();
        res.status(200).json({ success: true, todo: updatedTodo });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Private
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ success: false, message: 'Todo not found' });
        }

        if (todo.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'Not authorized' });
        }

        await todo.remove();
        res.status(200).json({ success: true, message: 'Todo removed' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
