import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const context = useContext(TodoContext)
    const stateArr = context.state;
    return (
        <div>
            This is the TodoList Component.
            {stateArr.map((state, index) => {
                return <TodoItem key={state.id + index} item={state}/>
            })}
        </div>
    )
}

export default TodoGroup;