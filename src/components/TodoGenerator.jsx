import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoGenerator = () => {

    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext);
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleAdd = () => {
        if (text !== "") {
            dispatch({type: "ADD", payload: text})
            setText("")
        }
    };
    return (
        <div>
            <input
                className={"todo-input"}
                type="text"
                value={text}
                max={100}
                placeholder={"Please input your todo item"}
                onChange={handleChange}/>
            <button
                className={"add-button"}
                onClick={handleAdd}>
                add
            </button>
        </div>
    )
}

export default TodoGenerator;