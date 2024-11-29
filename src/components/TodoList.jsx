import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import {getAllTodoItems} from "../api/todos";
import {Spin, Pagination} from "antd";

const TodoList = () => {

    const [loading, setLoading] = useState(false);
    const [todoArr, setTodoArr] = useState([])

    const {dispatch} = useContext(TodoContext);
    useEffect(() => {
        setLoading(true);
        getAllTodoItems().then((todo) => {
            setTodoArr(todo)
            dispatch({type: "FETCH", payload: todo})
        }).finally(() => {
            setLoading(false);
        })
    }, []);
    return (
        <div>
            {loading ? <Spin/> : (
                <div>
                    <h1>Todo List</h1>
                    <TodoGroup/>
                    <TodoGenerator/>
                    <Pagination
                        total={todoArr.length} />
                </div>
            )}
        </div>
    );
}

export default TodoList