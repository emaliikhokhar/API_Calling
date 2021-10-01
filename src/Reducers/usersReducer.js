const initialState = {
    usersList: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "USERS_FROM_API":
            let temp = [];
            temp = action.payload;
            state.usersList = temp;
            return state;

        default: return state;
    }
}

export default usersReducer