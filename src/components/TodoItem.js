import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
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
        <span className="date">{new Date(todo.createdAt).toLocaleDateString()}</span>
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
