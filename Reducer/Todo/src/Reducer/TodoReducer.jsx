export const TodoReducer = (state, action) => {
 switch(action.type)
 {
    case "add":
        {
            const newcounter = state.Counter + 1;
            const newTodoItem = {
                "id": newcounter,
                "text": action.text
            }
            return {
                "Counter": newcounter,
                "TODO": [...state.TODO, newTodoItem]
            }
        }
    case "edit":
        {
            const todoIdx = state.TODO.findIndex((rec)=>action.id == rec.id );
            const newTodo = Object.assign({},state.TODO[todoIdx]);
            newTodo.text = action.text;
            const newTodoList = Object.assign([],state.TODO);
            newTodoList.splice(action.id,1,newTodo);
            return {
                "Counter":state.Counter,
                "TODO": newTodoList
            }
        }
    case "remove":
        {
            const newTodoList = state.TODO.filter((rec)=>action.id != rec.id );
            return {
                "Counter":state.Counter,
                "TODO": newTodoList
            }
        }
    default:
        return state;
 }
}