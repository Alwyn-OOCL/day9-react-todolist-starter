import instance from "./todoInterceptor";

export const getAllTodoItems = async () => {
    const response = await instance.get("")
    return response.data;
}

export const getAllTodoItemsWithPagination = async (page, limit) => {
    const response = await instance.get("", {
        params: {
            pageIndex: page,
            pageSize: limit
        }
    });
    return response.data;
}

export const addTodoItems = async (data) => {
    const response = await instance.post("", data);
    return response.data;
}

export const deleteTodoItem = async (id) => {
    const response = await instance.delete("" + id)
    return response.data;
}

export const updateTodoItem = async (id, toUpdateItem) => {
    const response = await instance.put("" + toUpdateItem.id, toUpdateItem)
    return response.data;
}

export const getTodoItemById = async (id) => {
    const response = await instance.get(`${id}`)
    return [response.data];
}