import "../App.css";
import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {deleteTodoItem} from "../api/todos";

const TodoItem = (props) => {
    const item = props.item;
    const [completed, setCompleted] = useState(false);
    const {dispatch} = useContext(TodoContext);

    const handleClick = () => {
        setCompleted(!completed);
        dispatch({type: "COMPLETE", payload: item.id})
    }

    const handleDelete = () => {
        deleteTodoItem(item.id).then(() => {
            dispatch({type: "DELETE", payload: item.id})
        })
    };

    return (
        <div className="todo-item-container">
            <div className="todo-item-wrapper"
                 onClick={handleClick}>
                <span
                    style={completed ? {textDecoration: "line-through", fontWeight: "bold"} : {textDecoration: "none"}}>
                    {item.text}
                </span>
            </div>
            <button
                className="delete-button"
                onClick={handleDelete}
            >
                X
            </button>
        </div>

    )
}

export default TodoItem;