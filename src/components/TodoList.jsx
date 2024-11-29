import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext} from "react";
import {TodoContext} from "../App";

const TodoList = () => {

    const {state} = useContext(TodoContext);
    console.log(state)

    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
        </div>

    );
}

export default TodoList