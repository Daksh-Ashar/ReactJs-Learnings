import { useState } from "react"
import "../App.css";

export const AddTodo = ({add = () => {}}) => {
    const [text,setText] = useState("");
    return (
        <div className="AddTodo">
            <input type="text" value={text} placeholder="Enter todo item...." className="AddTodoInput" onChange={(e) => setText(e.target.value)}/>
            <button className="AddTodoButton" onClick={() => {
                add(text); 
                setText("")
                }}>Add</button>
        </div>
    )
}