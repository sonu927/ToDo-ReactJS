import React, { useEffect } from "react";

import { BsListTask } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo }) {
  const activeTodos = todos.filter((todo) => !todo.completed).reverse();
  const completedTodos = todos.filter((todo) => todo.completed);

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="mt-6">
      <div className="bg-cyan-600 text-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">
          <BsListTask className="inline mr-2 mb-1 text-white font-bold" />
          Active TODOs
        </h2>
        {activeTodos.length === 0 ? (
          <p className="text-gray-200">No active TODOs.</p>
        ) : (
          activeTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))
        )}
      </div>
      <div className="bg-cyan-600 p-4 mt-4 text-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">
          <BsCalendar2Check className="inline mr-2 mb-1 text-white" />
          Completed TODOs
        </h2>
        {completedTodos.length === 0 ? (
          <p className="text-gray-200">No completed TODOs.</p>
        ) : (
          completedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
