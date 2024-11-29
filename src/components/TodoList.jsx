import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect} from "react";
import {TodoContext} from "../App";
import {getAllTodoItems} from "../api/todos";

const TodoList = () => {

    const {dispatch} = useContext(TodoContext);
    useEffect(() => {
        getAllTodoItems().then((todo) => {
            dispatch({type: "FETCH", payload: todo})
        })

    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
        </div>

    );
}

export default TodoList