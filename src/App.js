import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/todos');
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    if (!task.trim()) return;
    await axios.post('http://localhost:5000/todos', { task, priority });
    setTask('');
    setPriority('Medium');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  const toggleCompleted = async (id) => {
    await axios.patch(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  /* ================= Components ================= */

  const TodoInput = () => (
    <div className="todo-input">
      <input
        type="text"
        placeholder="What do you want to do?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />

      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button onClick={addTodo}>Add Task</button>
    </div>
  );

  const Filter = () => (
    <div className="filter">
      {['All', 'Active', 'Completed'].map(f => (
        <button
          key={f}
          className={filter === f ? 'active' : ''}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );

  const TodoItem = ({ todo }) => (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo._id)}
        />
        <span>{todo.task}</span>
      </div>

      <div className="todo-right">
        <span className={`priority ${todo.priority.toLowerCase()}`}>
          {todo.priority}
        </span>
        <button onClick={() => deleteTodo(todo._id)}>✕</button>
      </div>
    </li>
  );

  const TodoList = () => {
    if (loading) return <p className="info">Loading tasks...</p>;
    if (!filteredTodos.length) return <p className="info">No tasks found</p>;

    return (
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    );
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1>📝 MERN To-Do App</h1>
        <TodoInput />
        <Filter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
