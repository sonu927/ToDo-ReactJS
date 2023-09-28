import React from "react";

function TodoItem({ todo, toggleTodo }) {
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      className={`p-4 cursor-pointer mb-2 rounded-lg shadow-md hover:drop-shadow-xl ${
        todo.completed
          ? "bg-emerald-300 hover:bg-emerald-400"
          : "bg-cyan-100 hover:bg-cyan-200"
      }`}
    >
      <div className="flex items-center">
        <div className="flex shrink-0 items-center">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 text-green-500"
            checked={todo.completed}
            readOnly
          />
        </div>
        <div className="ml-3">
          <p
            className={`text-xl ${
              todo.completed ? "line-through text-gray-700" : "text-gray-800"
            }`}
          >
            {todo.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
