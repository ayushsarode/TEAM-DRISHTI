import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <span className=" mx-auto h-full text-white items-center justify-center bg-teal-lightest font-sans  block">
      <div className="bg-violet-800   mx-auto h-screen rounded shadow p-6 m-4 max-h-[20rem] lg:max-w-2xl">
        <div className="mb-4">
          <h1 className="text-grey-darkest text-2xl">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border text-black rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal  bg-indigo-800 px-3 text-white hover:bg-teal"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo._id} className="flex mb-4 items-center">
              <p className={`w-full text-start ${todo.completed ? 'line-through text-green' : 'text-grey-darkest'}`}>
                - {todo.title}
              </p>
              <button
                className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ${
                  todo.completed ? 'text-grey border-grey hover:bg-grey' : 'text-green border-green hover:bg-green'
                }`}
                onClick={() => toggleComplete(todo._id, todo.completed)}
              >
                {todo.completed ? 'Not Done' : 'Done'}
              </button>
              <button
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                onClick={() => removeTodo(todo._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </span>
  );
};

export default TodoApp;
