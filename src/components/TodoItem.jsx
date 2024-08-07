import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const handleToggle = () => {
        updateTodo(todo.id, { ...todo, completed: !todo.completed });
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
                className="todo-checkbox"
            />
            <span className="todo-title">{todo.title}</span>
            <button onClick={handleDelete} className="todo-delete-button">Delete</button>
        </li>
    );
};

export default TodoItem;
