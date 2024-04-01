import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, {
      ...newTodo,
      id: uuidv4()
    }])
  }

  const removeTodo = (todoId) => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId))
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo} />
      <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          removeTodo={removeTodo}
        />
      ))}
      </ul>
    </div>
  )
}

export default TodoList