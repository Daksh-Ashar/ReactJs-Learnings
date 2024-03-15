import { useState } from "react"

export const Todo = ({todo, remove, edit}) => {
    const [editable,setEditable] = useState(false);
    const [todoText,setTodoText] = useState(todo.text);

    return (
        <div>
            {
                editable ? (
                    <>
                        <span>{todoText}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </>
                ) : (
                    <>
                        <input type="text" value={todoText} onChange={(e)=> setTodoText(e.target.value)} />
                        <button>Edit</button>
                        <button>Delete</button>
                    </>
                )
            }
        </div>
    )
}