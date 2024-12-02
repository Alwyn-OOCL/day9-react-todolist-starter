import React, {createContext, useReducer, useState} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import DoneList from "./components/DoneList";
import {Menu} from "antd";
import HelpPage from "./components/HelpPage";
import HardStop from "./components/HardStop";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [current, setCurrent] = useState('');
    const handleMenuChange = (e) => {
        setCurrent(e.key);
        window.location.href = `/${e.key}`;
    };

    const items = [
        {key: 'todo-list', label: 'Todo List'},
        {key: 'done-list', label: 'Done List'},
        {key: '404', label: '404Page'},
        {key: 'help', label: 'Help'}
    ];

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <Menu
                    onClick={handleMenuChange}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items} />
                <Router>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/todo-list"}/>}/>
                        <Route path={"/todo-list"} element={<TodoList/>}/>
                        <Route path={"/404"} element={<NotFound/>}/>
                        <Route path={"/500"} element={<HardStop/>}/>
                        <Route path={"/done-list"} element={<DoneList/>}/>
                        <Route path={"/help"} element={<HelpPage/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
