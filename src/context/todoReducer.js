export const initialState = [
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {id: Date.now(), text: action.payload, done: false}]
        case "DELETE":
            return state.filter((item) => item.id !== action.payload)
        case "CLEAR":
            return state.splice(0, state.length)
        default:
            return;
    }
};