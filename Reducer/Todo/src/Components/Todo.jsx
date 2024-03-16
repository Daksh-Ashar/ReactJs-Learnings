import { useState } from "react"
import "../App.css";

export const Todo = ({todo, remove = () => {}, edit = () => {}}) => {
    const [editable,setEditable] = useState(false);
    const [todoText,setTodoText] = useState(todo.text);

    return (
        <div className="Todo">
            {
                !editable ? (
                    <>
                        <span className="TodoText">{todoText}</span>
                        <button className="RemoveTodo" onClick={remove}>Remove</button>
                        <button className="EditTodo" onClick={()=> setEditable(true)}>Edit</button>
                    </>
                ) : (
                    <>
                        <input type="text" value={todoText} onChange={(e)=> setTodoText(e.target.value)} className="EditTodoInput"/>
                        <button className="EditTodoSave" onClick={() => {edit(todoText); setEditable(false);}}>Save</button>
                        <button className="EditTodoCancel" onClick={() => setEditable(false)}>Cancel</button>
                    </>
                )
            }
        </div>
    )
}