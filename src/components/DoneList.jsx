import {useContext} from "react";
import {TodoContext} from "../App";

const DoneList = () => {

    const {state} = useContext(TodoContext);

    const doneList = state.filter((todo) => todo.done)
    console.log(doneList)
    return (
        <div>
            {state.map((item) => {
                return <div>{item.text}</div>
            })}
        </div>
    )
}

export default DoneList;