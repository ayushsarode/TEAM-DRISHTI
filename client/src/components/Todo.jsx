import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CubeScene from './CubeScene';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5500/api/v2/todo/getTodo', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(response.data.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Failed to fetch todos');
    }
  };

  const addTodo = async () => {
    if (newTodo.trim() !== "") {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          'http://localhost:5500/api/v2/todo/addTodo',
          { title: newTodo, description: '' },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTodos([...todos, response.data.todo]);
        setNewTodo("");
      } catch (error) {
        console.error('Error adding todo:', error);
        setError('Failed to add todo');
      }
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5500/api/v2/todo/update/${id}`,
        { completed: !completed },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchTodos(); // Fetch updated list after toggling completion
    } catch (error) {
      console.error('Error toggling todo:', error);
      setError('Failed to update todo');
    }
  };

  const removeTodo = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5500/api/v2/todo/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError('Failed to delete todo');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <CubeScene />
      <div className="relative bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-lg z-10">
        <h1 className="text-3xl text-center text-white font-bold mb-8">Todo List</h1>
        <div className="mb-4 flex items-center">
          <input
            className="flex-grow p-3 rounded-l-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add Todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="p-3 bg-blue-500 text-white rounded-r-xl hover:bg-blue-600 transform hover:scale-105 transition duration-300"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo._id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg"
            >
              <p className={`flex-grow ${todo.completed ? 'line-through text-green-500' : 'text-gray-800'}`}>
                {todo.title}
              </p>
              <button
                className={`p-2 ml-2 rounded-lg ${todo.completed ? 'bg-gray-300 text-gray-700' : 'bg-green-500 text-white'} hover:bg-green-600 transition`}
                onClick={() => toggleComplete(todo._id, todo.completed)}
              >
                {todo.completed ? 'Undo' : 'Done'}
              </button>
              <button
                className="p-2 ml-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => removeTodo(todo._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default TodoApp;
