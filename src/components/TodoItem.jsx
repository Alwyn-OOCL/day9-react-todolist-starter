import "../App.css";
import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {deleteTodoItem, updateTodoItem} from "../api/todos";
import {Modal} from "antd";

const TodoItem = (props) => {
    const item = props.item;
    const {dispatch} = useContext(TodoContext);
    const [showModel, setShowModel] = useState(false)
    const [newText, setNewText] = useState("")

    const handleClick = () => {
        const updatedItem = {...item, done: !item.done};
        updateTodoItem(item.id, updatedItem).then(() => {
            dispatch({type: "UPDATE", payload: updatedItem})
        })
    }

    const handleDelete = () => {
        deleteTodoItem(item.id).then(() => {
            dispatch({type: "DELETE", payload: item.id})
        })
    };

    const handleCancel = () => {
        setShowModel(false);
    };

    const handleSubmit = () => {
        const updatedItem = {...item, text: newText};
        updateTodoItem(item.id, updatedItem).then(() => {
            dispatch({type: "UPDATE", payload: updatedItem})
        })
        setShowModel(false);
    };

    const handleEdit = () => {
        setShowModel(true);
    };

    const handleTextChange = (event) => {
        setNewText(event.target.value)
    }
    return (
        <div className="todo-item-container">
            <div className="todo-item-wrapper"
                 onClick={handleClick}>
                <span
                    style={item.done ? {textDecoration: "line-through", fontWeight: "bold"} : {textDecoration: "none"}}>
                    {item.text}
                </span>
            </div>
            <button
                onClick={handleEdit}
            >
                🖊
            </button>
            <button
                className="delete-button"
                onClick={handleDelete}
            >
                X
            </button>
            <Modal
                className={"edit-modal"}
                title="Update Todo Item"
                visible={showModel}
                onOk={handleSubmit}
                onCancel={handleCancel}
                cancelText={"cancel"}
            >
                <textarea
                    className={"model-text"}
                    onChange={handleTextChange}
                >
                {item.text}
                </textarea>
            </Modal>
        </div>

    )
}

export default TodoItem;