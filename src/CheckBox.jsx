import React, { useState } from 'react';
import './CheckBox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CheckBox() {
  const [todoTypes] = useState(['Daily Lists', 'Weekly Lists', 'Ongoing Lists']);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (type) => {
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false, type }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const renderTasks = (listType) => (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos
          .filter((todo) => todo.type === listType)
          .map((todo, index) => (
            <tr key={index} className={todo.completed ? 'table-success' : ''}>
              <td style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</td>
              <td>
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(index)}
                    className="form-check-input"
                  />
                </label>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );

  return (
    <div className="app container">
      <h1 className="mt-3">Todo App</h1>
      <div className="add-todo mt-3">
        <input
          type="text"
          placeholder="Add a new to-do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="form-control"
        />
        <button onClick={() => handleAddTodo(todoTypes[0])} className="btn btn-primary mt-2">Add Daily List</button>
        <button onClick={() => handleAddTodo(todoTypes[1])} className="btn btn-primary mt-2">Add Weekly List</button>
        <button onClick={() => handleAddTodo(todoTypes[2])} className="btn btn-primary mt-2">Add Ongoing List</button>
      </div>

      <div className="row mt-3">
        <div className="col text-right">
          {todoTypes.map((type, index) => (
            <div key={index} className="d-inline-block mx-2">
              <h2>{type}</h2>
              {renderTasks(type)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
