import "../App.css";
import {useState} from "react";

const TodoItem = (props) => {
    const item = props.item;
    const [completed, setCompleted] = useState(false);

    const handleClick = () => {
        setCompleted(!completed);
    }
    return (
        <div className="todo-item-wrapper"
             onClick={handleClick}>
            <span
                style={completed ? {textDecoration: "line-through", fontWeight: "bold"} : {textDecoration: "none"}}>
                    {item.text}
            </span>
        </div>
    )
}

export default TodoItem;