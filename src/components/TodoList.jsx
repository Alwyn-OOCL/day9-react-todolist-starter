import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import {getAllTodoItemsWithPagination} from "../api/todos";
import {Pagination, Spin} from "antd";

const TodoList = () => {

    const [loading, setLoading] = useState(true);
    const [todoArr, setTodoArr] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const {dispatch} = useContext(TodoContext);
    useEffect(() => {
        getAllTodoItemsWithPagination(currentPage, pageSize).then((todos) => {
            setTodoArr(todos.content);
            dispatch({type: "FETCH", payload: todos.content})
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    const handleSizeChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    }
    return (
        <div>
            {loading ? <Spin/> : (
                <div>
                    <h1>Todo List</h1>
                    <TodoGroup
                        pageSize={pageSize}
                        pageIndex={currentPage}
                    />
                    <TodoGenerator/>
                    <Pagination
                        align="center"
                        total={todoArr.length}
                        pageSize={pageSize}
                        showSizeChanger
                        current={currentPage}
                        showTotal={(total) => `Total ${total} items`}
                        onChange={handleSizeChange}
                    />
                </div>
            )}
        </div>
    );
}

export default TodoList