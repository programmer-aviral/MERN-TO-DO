import React from 'react';

const TodoInput = ({ task, setTask, priority, setPriority, addTodo }) => {
  return (
    <div className="todo-input">
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
