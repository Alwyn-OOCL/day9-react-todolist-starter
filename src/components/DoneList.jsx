import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";
import {getAllTodoItems} from "../api/todos";
import {Spin} from "antd";

const DoneList = () => {

    const {state} = useContext(TodoContext);
    const [loading, setLoading] = useState(true);
    const [doneList, setDoneList] = useState([])

    useEffect(() => {
        getAllTodoItems().then((todos) => {
            setDoneList(todos.filter((todo) => todo.done))
        }).finally(() => {
            setLoading(false);
        });
    }, [state]);

    return (
        <div>
            {loading ? <Spin/> :
                (<div>
                    {
                        doneList.length === 0 ? <h2>No Done Items</h2> :
                            doneList
                            .map((state, index) => {
                                return <TodoItem
                                    key={state.id + index}
                                    item={state}
                                />
                            })}
                </div>)
            }
        </div>

    )
}

export default DoneList;