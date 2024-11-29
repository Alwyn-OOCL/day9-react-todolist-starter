import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoGenerator = () => {

    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext);
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleAdd = () => {
        if (text.trim() !== "") {
            dispatch({type: "ADD", payload: text})
            setText("")
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAdd()
        }
    }
    const handleClear = () => {
        dispatch({type: "CLEAR"})
    };
    return (
        <div>
            <input
                className={"todo-input"}
                type="text"
                value={text}
                max={100}
                placeholder={"Please input your todo item"}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button
                className={"add-button"}
                onClick={handleAdd}>
                add
            </button>
            <button
                className={"clear-button"}
                onClick={handleClear}>
                clear
            </button>
        </div>
    )
}

export default TodoGenerator;