import React, {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import DoneList from "./components/DoneList";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <Router>
                    <div>
                        <Link to={"/todo-list"}>todo-list</Link>
                        <br/>
                        <Link to={"/done-list"}>done-list</Link>
                    </div>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/todo-list"}/>}/>
                        <Route path={"/todo-list"} element={<TodoList/>}/>
                        <Route path={"/404"} element={<NotFound/>}/>
                        <Route path={"/done-list"} element={<DoneList/>}/>
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
