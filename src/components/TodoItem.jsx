import "../App.css";
import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {deleteTodoItem, getTodoItemById, updateTodoItem} from "../api/todos";
import {Modal, Table} from "antd";

const TodoItem = (props) => {
    const item = props.item;
    const {dispatch} = useContext(TodoContext);
    const [showEditModel, setShowEditModel] = useState(false)
    const [showDetailModel, setShowDetailModel] = useState(false)
    const [newText, setNewText] = useState("")
    const [detail, setDetail] = useState()

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'text',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'done',
            dataIndex: 'done',
            key: 'done',
            render: (done) => (done ? '是' : '否'),
        },
    ];

    const handleClick = () => {
        getTodoItemById(item.id).then((item) => {
            setDetail(item)
        }).finally(() => {
            setShowDetailModel(true);
        })
    }

    const handleDelete = () => {
        deleteTodoItem(item.id).then(() => {
            dispatch({type: "DELETE", payload: item.id})
        })
    };

    const handleCancel = () => {
        setShowEditModel(false);
        setShowDetailModel(false);
    };

    const handleSubmit = () => {
        const updatedItem = {...item, text: newText};
        updateTodoItem(item.id, updatedItem).then(() => {
            dispatch({type: "UPDATE", payload: updatedItem})
        })
        setShowEditModel(false);
    };

    const handleEdit = () => {
        setShowEditModel(true);
    };

    const handleTextChange = (event) => {
        setNewText(event.target.value)
    }
    const handleDone = () => {
        const updatedItem = {...item, done: !item.done};
        updateTodoItem(item.id, updatedItem).then(() => {
            dispatch({type: "UPDATE", payload: updatedItem})
        })
    };
    const handleOk = () => {
        setShowDetailModel(false);
    };
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
            <button
                className="delete-button"
                onClick={handleDone}
            >
                Done
            </button>
            <Modal
                className={"edit-modal"}
                title="Update Todo Item"
                visible={showEditModel}
                onOk={handleSubmit}
                onCancel={handleCancel}
                cancelText={"cancel"}
            >
                <textarea
                    className={"model-text"}
                    onChange={handleTextChange}
                    defaultValue={item.text}
                >
                </textarea>
            </Modal>
            <Modal
                className={"edit-modal"}
                title="Todo Item Detail"
                visible={showDetailModel}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText={"cancel"}
            >
                <Table dataSource={detail} columns={columns}/>
            </Modal>
        </div>

    )
}

export default TodoItem;