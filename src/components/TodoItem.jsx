import "../App.css";
import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoItem = (props) => {
    const item = props.item;
    const [completed, setCompleted] = useState(false);
    const {dispatch} = useContext(TodoContext);

    const handleClick = () => {
        setCompleted(!completed);
    }

    const handleDelete = () => {
        console.log("delete ", item.id)
        dispatch({type: "DELETE", payload: item.id})
    };

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="todo-item-wrapper" onClick={handleClick}>
        <span
            style={completed ? {textDecoration: "line-through", fontWeight: "bold"} : {textDecoration: "none"}}>
            {item.text}
        </span>
            </div>
            <button
                className="delete-button"
                onClick={handleDelete}
                style={{marginLeft: '10px'}}  // 可根据需要调整间距
            >
                X
            </button>
        </div>

    )
}

export default TodoItem;