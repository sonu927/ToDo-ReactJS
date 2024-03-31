import React, { useState, useEffect } from "react";
import { LuTimerReset } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { MdAddTask } from "react-icons/md";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false, id: Date.now() }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  return (
    <>
      <div className="container mx-auto mt-4 rounded-md p-4 bg-cyan-800 shadow-xl">
        <div className="flex justify-between items-center text-white mb-4">
          <div>
            <h1 className="text-3xl ">
              <LuListTodo className="inline mr-2 mb-1" />
              ToDo App
            </h1>
          </div>

          <div>
            <button
              className=" bg-red-500 text-white p-2 rounded"
              onClick={resetTodos}
            >
              <LuTimerReset className="text-xl" />
            </button>
          </div>
        </div>

        <div className="flex">
          <input
            type="text"
            className="border rounded-l p-2 w-4/5 bg-cyan-50"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") addTodo();
            }}
            placeholder="Add a new TODO..."
          />
          <button
            className="bg-cyan-700 text-white p-2 rounded-r"
            onClick={addTodo}
          >
            <MdAddTask className="text-xl" />
          </button>
        </div>

        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </>
  );
}

export default App;
