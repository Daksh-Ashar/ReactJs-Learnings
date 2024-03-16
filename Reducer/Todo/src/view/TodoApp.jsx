import { useReducer } from "react";
import { AddTodo } from "../Components/AddTodo";
import { Todo } from "../Components/Todo";
import { TodoReducer } from "../Reducer/TodoReducer";
import "../App.css";

export const TodoApp = () => {
    const [state, dispatchReducer] = useReducer(TodoReducer,{"Counter": 0, "TODO":[]});
    return (
        <div className="App">
            <AddTodo add={(text)=>{dispatchReducer({"type":"add","text":text})}}/>
            {
                state?.TODO.map((record,index)=> {
                    return <Todo key={index} todo = {record} remove={
                        ()=>{dispatchReducer({"type":"remove", "id": record.id})}
                    } edit={
                        ()=> {(text) => dispatchReducer({"type":"edit", "id": record.id,"text": text})}
                    } />
                })
            }
        </div>
    )
}