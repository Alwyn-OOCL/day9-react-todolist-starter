import "../App.css";

const TodoItem = (props) => {
    const item = props.item;
    return (
        <div className="todo-item-wrapper">
            <span>{item.text}</span>
        </div>
    )
}

export default TodoItem;