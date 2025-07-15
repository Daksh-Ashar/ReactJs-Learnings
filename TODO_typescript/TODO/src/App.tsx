import { useState } from "react";
import "./App.css";
import type { Todo } from "./Interface.tsx";
import TodoItem from "./Components/TodoItem.tsx";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
  setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
};


  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!newTodo.trim()) return; // ignore empty input

          const todo: Todo = {
            id: Date.now(),
            text: newTodo.trim(),
            completed: false,
          };

          setTodos([...todos, todo]);
          setNewTodo("");
        }}
      >
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => 
           <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos} setTodos={setTodos}/>
        )}
      </ul>
    </>
  );
}

export default App;
