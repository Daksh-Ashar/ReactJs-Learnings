import { useReducer } from "react";
import { AddTodo } from "../Components/AddTodo";
import { Todo } from "../Components/Todo";
import { TodoReducer } from "../Reducer/TodoReducer";

export const TodoApp = () => {
    const [state, reducer] = useReducer(TodoReducer,[]);
    return (
        <>
            <AddTodo/>
            <Todo/>
        </>
    )
}