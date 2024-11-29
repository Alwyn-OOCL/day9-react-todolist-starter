export const initialState = [
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "DELETE":
            return state.filter((item) => item.id !== action.payload)
        case "FETCH":
            return action.payload;
        case "COMPLETE":
            const toCompleteItem = state.find((item) => item.id === action.payload)
            toCompleteItem.done = true;
            return state.map((item) => item.id === action.payload ? toCompleteItem : item)
        case "CLEAR":
            return state.splice(0, state.length)
        default:
            return;
    }
};