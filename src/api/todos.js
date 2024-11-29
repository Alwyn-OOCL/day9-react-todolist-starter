import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c0e868020296630a7a6.mockapi.io/api/todo",
    timeout: 5000
})

export const getAllTodoItems = async () => {
    const response = await instance.get("TodoItems")
    return response.data;
}

export const addTodoItems = async (data) => {
    const response = await instance.post("TodoItems", data);
    return response.data;
}