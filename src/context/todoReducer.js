export const initialState = [];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "DELETE":
            return state.filter((item) => item.id !== action.payload)
        case "FETCH":
            return action.payload;
        case "COMPLETE":
            return state.map((item) => item.id === action.payload ? {...item, done: !item.done} : item)
        case "UPDATE":
            return state.map((item) => item.id === action.payload.id ? action.payload : item)
        case "CLEAR":
            return state.splice(0, state.length)
        default:
            return;
    }
};