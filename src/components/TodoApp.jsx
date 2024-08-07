import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './TodoApp.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/todos');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async (todo) => {
        try {
            const response = await fetch('http://localhost:8080/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });
            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const updateTodo = async (id, updatedTodo) => {
        try {
            const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTodo),
            });
            const data = await response.json();
            setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:8080/api/todos/${id}`, {
                method: 'DELETE',
            });
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="todo-app">
            <h1>To-Do App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoApp;
