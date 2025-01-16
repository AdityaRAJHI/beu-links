import React, { useState } from 'react';
    import './TodoList.css';

    function TodoList() {
      const [todos, setTodos] = useState([]);
      const [inputValue, setInputValue] = useState('');

      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

      const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
          setTodos([...todos, { text: inputValue, completed: false }]);
          setInputValue('');
        }
      };

      const handleToggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
      };

      const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
      };

      return (
        <div className="todo-list">
          <h2>Todo List</h2>
          <div className="todo-input">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className={todo.completed ? 'completed' : ''}>
                <span onClick={() => handleToggleComplete(index)}>
                  {todo.text}
                </span>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default TodoList;
