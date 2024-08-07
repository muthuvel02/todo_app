import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            title,
            description,
            completed: false,
        });
        setTitle('');
        setDescription('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="todo-input"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="todo-textarea"
            />
            <button type="submit" className="todo-submit-button">Add Todo</button>
        </form>
    );
};

export default TodoForm;
