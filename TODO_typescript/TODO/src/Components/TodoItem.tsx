import type { Todo } from "../Interface.tsx";
import React, { useState } from "react";


interface TodoItemProps {
  todo: Todo;
  todos: Todo[],
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  todos,
  toggleTodo,
  deleteTodo,
  setTodos
}) => {
    const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

   const startEditing = (id: number, currentText: string) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const saveTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editingText } : todo
    ));
    setEditingId(null);
    setEditingText('');
  };
  
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => saveTodo(todo.id)}>💾 Save</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                <button onClick={() => startEditing(todo.id, todo.text)}>✏️ Edit</button>
              </>
            )}

            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
    
  );
};

export default TodoItem;
