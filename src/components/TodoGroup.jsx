import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const context = useContext(TodoContext)
    const stateArr = context.state;
    const {pageSize, pageIndex} = props;
    return (
        <div>
            <h2 style={stateArr && stateArr.length !== 0 ? {display: "none"} : {}}>Add the things you need to do today...</h2>
            {stateArr
            .slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
            .map((state, index) => {
                return <TodoItem
                    key={state.id + index}
                    item={state}
                />
            })}
        </div>
    )
}

export default TodoGroup;