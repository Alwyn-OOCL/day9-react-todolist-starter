import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {addTodoItems, getAllTodoItems} from "../api/todos";

const TodoGenerator = () => {

    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext);
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleAdd = () => {
        if (text.trim() !== "") {
            const toAddTodoItem = {text, done: false}
            addTodoItems(toAddTodoItem).then((newItem) => {
                dispatch({type: "ADD", payload: newItem})
                setText("");
            })
        }

    };

    const handleFetch = () => {
        getAllTodoItems().then((todo) => {
            dispatch({type: "FETCH", payload: todo})
        })
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAdd()
        }
    }
    return (
        <div style={{margin: "10px auto"}}>
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
                onClick={handleFetch}>
                fetch
            </button>
        </div>
    )
}

export default TodoGenerator;