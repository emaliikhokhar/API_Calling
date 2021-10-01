const initialState = {
    todoList: []
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "TODOS_FROM_API":
            let temp = [];
            temp = action.payload;
            state.todoList = temp;
            return state;

        default: return state;
    }
}

export default todosReducer